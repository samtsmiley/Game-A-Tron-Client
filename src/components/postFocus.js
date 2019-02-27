import React from 'react';
import {connect} from 'react-redux';
import './postPhotoImageLoading';
import PostPhotoImageProcess from './postPhotoImageProcess';
import {postPost} from '../actions/post'
import {updateScore} from '../actions/game';
import {API_BASE_URL} from '../config';

export class PostFocus extends React.Component {

  constructor(props){
    super();

    this.state = {

      postComment:'',
      scoreValue: 0,
      scoreDescription: null,
      postImageSource: null,
      postImageId: null,
      uploading: false,
      images:[],
      showPhotoProcess: true,
      abortPost: false,
      postReady: false,
 
    }

    this.onChange = this.onChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.noPhoto = this.noPhoto.bind(this);
     
  } 

  //SUBMIT POST
  onSubmitPost = () => {
     
    let imageAdd = null;
    let imageIdAdd = null;

    if(this.state.images.length > 0){

      imageAdd = this.state.images[0].secure_url;
      imageIdAdd = this.state.images[0].public_id;

    }
 

    //TO THE POSTS
    this.props.dispatch(postPost(
 
      {
        description:this.state.scoreDescription,
        gameId:this.props.gameId,
        value: parseInt(this.state.scoreValue),
        comment: this.state.postComment,
        image: imageAdd,
        imageId: imageIdAdd
      }));
  
    //TO USER 
    this.props.dispatch(updateScore(
      this.props.gameId,
      {
        userId: this.props.userId,
        score: parseInt(this.props.score) + parseInt(this.state.scoreValue)
      }));

    this.props.dispatch(this.props.hideDropdownMenu);
 
  }
   
  //ADD A COMMENT TO POST
  onComment = text => {
    this.setState({
      postComment: text
    })

  }

  onRadioSelect = (name, value) => {
    this.setState({
      scoreValue: value,
      scoreDescription: name,
      postReady: true
    })

    
  }

  //ADD PHOTO TO POST -- process the get file stuff for photo
  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({
      postReady: false,
      uploading: true
    })

    const formData = new FormData();

    // console.log('here at process: ',files);

    files.forEach((file, i)=>{
      formData.append(i, file)
    })

    fetch(`${API_BASE_URL}/image-upload`,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {

      let setBool = false;

      if(this.state.scoreDescription){

        setBool = true;
      }

      this.setState({
        uploading: false,
        images, 
        postReady: setBool
      })

    })
 
  }
 
  //SET POST TO NO PHOTO -- hide add photo stuff
  noPhoto = () => {
     
    this.setState({
      uploading: false,
      showPhotoProcess: false,
    })
  
  }

  //Reset photo upload for a different photo choice
  removeImage = id => {
      
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  
  }

render(){
 
  //List of score opportunities with radio buttons for selection        
  const scoreOpps = this.props.scoreOpps.map(item =>
    <li className="scoreName" key={item.description}> 
      <input type='radio'
            value={item.points}
            name={item.description}
            checked={this.state.scoreDescription === item.description}
            className="gameButton"
            id={item.description}
            onChange={(e)=>{ 
              this.onRadioSelect(e.currentTarget.name, e.currentTarget.value)
            }} 
            
      >
      </input> 
      <label htmlFor={item.description}>{item.description}</label>
      {/* for {item.points} points. */}
  </li>
 )

 //Button options
 const submitPostButton = <button onClick={this.onSubmitPost}>Submit</button>;
 const disabledSubmitPostButton = <button disabled >Submit</button>;
 const nevermindButton = <button onClick={this.props.hideDropdownMenu}>Cancel</button>;
 

 //When postReady is set to true then show
 //the SUBMIT button otherwise show the NEVERMIND button
 const showSubmit = this.state.postReady 
  ? <React.Fragment>{nevermindButton}&nbsp;&nbsp;{submitPostButton}</React.Fragment>
  : <React.Fragment>{nevermindButton}&nbsp;&nbsp;{disabledSubmitPostButton}</React.Fragment>

  //Show the photo upload options if showPhotoProcess is
  //set to true otherwise hide it         
  const showPhotoProcess = this.state.showPhotoProcess
   ? <PostPhotoImageProcess
      noPhoto={this.noPhoto}
      onChange={this.onChange}
      images={this.state.images}
      removeImage={this.removeImage}
      theState={this.state}/>
   : null

  return (

    <div className='postFocusWindow subcard'>
      <h2>Post a Score</h2> 
      <form>
        <ul>{scoreOpps}</ul>
      </form>
      <form>
        <label></label>
        <input onChange={(e) => this.onComment(e.currentTarget.value)}
              type='text'
              placeholder='Add a Comment'
              >
        </input>
        
        
      </form>
      <br/>
      <div className="addphotobtn">
        {showPhotoProcess}  
      </div>
     
      <br/>
      {showSubmit} 
    </div>

  )

}


}


const mapStateToProps = state => {

  let score = 0;
  const currentParticipant = state.game.data.participants
    .find(participant =>
      participant.userId.id === state.auth.currentUser.id);

  if(currentParticipant) {score = currentParticipant.score;}
   

  return {

    selectGameData: state.game.data,
    scoreOpps: state.game.data.scores,
    gameId: state.game.data.id,
    userId: state.auth.currentUser.id,
    score
  }
   
}

export default connect(mapStateToProps)(PostFocus);
 