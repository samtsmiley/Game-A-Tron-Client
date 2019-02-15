import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
// import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './createPostForm.css'



export class CreatePostForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.postComment, values.password));
    }
            /* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */
             myFunction() {
                document.getElementById("myDropdown").classList.toggle("show");
            }
            
            // Close the dropdown if the user clicks outside of it
            window.onclick = function(event) {
                if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                    }
                }
                }
            }
    render() {

        
        // const dropdownItems = this.props.ddi.map(item =>
        //     console.log(item)
        // );

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="createPost"
                autoComplete="on"

                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="postComment">postComment</label>
                <Field
                    component={Input}
                    type="text"
                    name="postComment"
                    id="postComment"
                    // validate={[nonEmpty]}
                />
               <div className="dropdown">
               <button onClick={() => this.myFunction()} className="dropbtn">Dropdown</button>
               <div id="post" class="dropdown-content">
                 {dropdownItems}
                 </div>
             </div>
                
            </form>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('>>>>>',state)
    return {
        ddi: state.game.data.scores
    }
};

CreatePostForm = connect(
    mapStateToProps,
)(CreatePostForm);


export default reduxForm({
    form: 'createPost',
    onSubmitFail: (errors, dispatch) => dispatch(focus('desc'))
})(CreatePostForm);
