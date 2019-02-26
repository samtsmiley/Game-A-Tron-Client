import React from 'react';

export default function(props) {

  return props.images.map((image, i) => {
    return(

      <div key={i} className='fadein'>
        <div onClick={() => props.removeImage(image.public_id)}
             className='delete'
             >
             Choose a Different Image
        </div>
        <img src={image.secure_url} alt=''/>
      </div>

    )
    
  })

}