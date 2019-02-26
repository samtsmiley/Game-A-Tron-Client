import React from 'react';

export default function(props){
  return(
    <div>
      <label htmlFor='single'>Add Photo</label>
      <input type='file' id='single' onChange={props.onChange} />  
    </div>
  )
}