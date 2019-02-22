import React from 'react';

export default function(props){

  return(
    <div>
      <div>
        <label htmlFor='single'>
          -- SINGLE PHOTO UPLOAD BUTTON --
        </label>
        <input type='file' id='single' onChange={props.onChange} />
      </div>
    </div>
  )
 
}