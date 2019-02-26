import React from 'react';

export default function(props){

  return(
    <div>
      <div>
      <h3>ADD A COOL PHOTO </h3> 
      <label htmlFor='single'></label>
        <input type='file' id='single' onChange={props.onChange} />  
      </div>
      <br/>
      <div>
      <h3>OR FOR NO PHOTO CLICK</h3>  
      <button onClick={props.noPhoto}>NO PHOTO</button>
      </div>
    </div>
  )
 
}