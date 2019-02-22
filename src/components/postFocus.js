import React from 'react';
import {connect} from 'react-redux';
import {showPostFocus} from '../actions/sideBar-actions';
import './createPostFocus.css';
import './postPhotoImageLoading';
import PostPhotoImageProcess from './postPhotoImageProcess';

export class PostFocus extends React.Component {

  constructor(props){
    super();

    this.state = {

      postComment:'',
      scoreValue: 0,
      scoreDescription: ''
 
    }
 
  } 

render(){

/* REF
<input
            type="radio"
            name="public"
            value="public"
            checked={this.state.selectedRadio === 'public'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="public">Public</label>
          */
   
  const scoreOpps = this.props.scoreOpps.map(item =>
    <li className="scoreName" key={item.description}>    
    <input type='radio'
           name="public"
           checked={'goober'}
           className="gameButton"
           onChange={(e)=>{
            e.preventDefault();
            console.log(e)

           }} >
     
     </input> 
     <label htmlFor="public">I {item.description} for {item.points} points.</label>
      
  </li>
 )

  return (

    <div className='postFocusWindow'>
    <br/>
    <h2>AWESOME YOU SCORED!</h2> 
    <h3>Select a score option:</h3>
    <ul>{scoreOpps}</ul>
    <br/>
    <form>
      <label> Add a comment: </label>
      {/* <input onChange={e => props.handleChange(e.target.value)}/> */}
    </form>
    <br/>
    <PostPhotoImageProcess />
    <br/><br/>
    <button>SUBMIT SCORE POST</button>
    </div>

  )

}


}

const mapStateToProps = state => {

  return {
    selectGameData: state.game.data,
    scoreOpps: state.game.data.scores
  }
   
}

export default connect(mapStateToProps)(PostFocus);