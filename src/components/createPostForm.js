import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './createPostForm.css'



export class CreatePostForm extends React.Component {

   
            
           
    render() {

       ;

    
        return (
            <div>
                <h3>Post a Score</h3>
                
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    console.log('>>>>>',state)
    return {
        scoreOpps: state.game.data.scores
    }
};

CreatePostForm = connect(
    mapStateToProps,
)(CreatePostForm);


export default reduxForm({
    form: 'createPost',
    onSubmitFail: (errors, dispatch) => dispatch(focus('desc'))
})(CreatePostForm);
