import React from 'react';

export default function(props) {

  return props.images.map((image,i) => {
    return(

      <div key={i} className='fadein'>
        <div onClick={()=>props.removeImage(image.public_id)}
             className='delete'>CLICK HERE TO USE A DIFFERENT IMAGE
        </div>
        <h3>IMAGE UPLOADED: </h3>
        <img src={image.secure_url} alt=''/>
      </div>

    )
    
  })

}