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
      
    //Add point opp description
    //Add point value -- from radio button selection
    //Add user comment -- from input field
    //Add user image or null from postImageSource

    console.log('whats going to postPost: ',
    this.state.scoreDescription,
    this.props.gameId,
    this.state.scoreValue,
    this.state.postComment,
    this.state.images[0].secure_url,
    this.state.images[0].public_id,'end>>');

    console.log('whats going to updateScore: ',
    this.props.gameId,
    this.props.userId,
    (this.props.score + this.state.scoreValue));

    //TO THE POSTS
    this.props.dispatch(postPost(
      {
        description:this.state.scoreDescription,
        gameId:this.props.gameId,
        value: parseInt(this.state.scoreValue),
        comment: this.state.postComment,
        image: this.state.images[0].secure_url,
        imageId: this.state.images[0].public_id
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

  onRadioSelect = (name,value) => {

    // let setTrue = false;

    // if(this.showPhotoProcess === false){
    //   setTrue = true;
    // }

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

    console.log('here at process: ',files);

    files.forEach((file,i)=>{
      formData.append(i,file)
    })

    fetch(`${API_BASE_URL}/image-upload`,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false,
        images, 
        postReady: true
      })

    })
 
  }
 
  //SET POST TO NO PHOTO -- hide add photo stuff
  noPhoto = () => {
    
    // let setTrue = false;

    // if(this.scoreDescription === false){
    //   setTrue = true;
    // }

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

  console.log('current local state: ',this.state);
  
  //List of score opportunities with radio buttons for selection        
  const scoreOpps = this.props.scoreOpps.map(item =>
    <li className="scoreName" key={item.description}>    
    <input type='radio'
           value={item.points}
           name={item.description}
           checked={this.state.scoreDescription === item.description}
           className="gameButton"
           onChange={(e)=>{ 
            this.onRadioSelect(e.currentTarget.name,e.currentTarget.value)
           }} >
     
     </input> 
     <label htmlFor="public">{item.description} for {item.points} points.</label>
      
  </li>
 )

 //Button options
 const submitPostButton = <button onClick={this.onSubmitPost}>SUBMIT SCORE POST</button>;
 const nevermindButton = <button onClick={this.props.hideDropdownMenu}>NEVERMIND</button>;
 

 //When postReady is set to true then show
 //the SUBMIT button otherwise show the NEVERMIND button
 const showSubmit = this.state.postReady 
  ? <React.Fragment>{submitPostButton}&nbsp;&nbsp;{nevermindButton}</React.Fragment>
  : <React.Fragment>{nevermindButton}</React.Fragment>

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

    <div className='postFocusWindow'>
    <br/>
    <h2>AWESOME YOU SCORED!</h2> 
    <form>
      <label><h3>Select a score option:</h3></label>
      <ul>{scoreOpps}</ul>
    </form>
    <form>
      <label><h3> Add a comment: </h3></label>
      <input onChange={(e) => this.onComment(e.currentTarget.value)}
             type='text'
             placeholder='I crushed this! Victory will be mine!'>
      </input>
      {/* <input onChange={e => props.handleChange(e.target.value)}/> */}
       
    </form>
    <br/>
    {showPhotoProcess}
    <br/><br/>
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
 