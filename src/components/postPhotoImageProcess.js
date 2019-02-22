import React from 'react';
import PostPhotoImageLoading from './postPhotoImageLoading';
import PostPhotoButtons from './postPhotoButtons';
import PostPhotoImages from './postPhotoImages';

import {API_BASE_URL} from '../config';

export default class PostPhotoImageProcess extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      uploading: false,
      images:[]

    }

  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({
      uploading: true
    })

    const formData = new FormData();

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
        images
      })

    })
 
  }

  removeImage = id => {
      
      this.setState({
        images: this.state.images.filter(image => image.public_id !== id)
      })
  
  }
 
  render() {

    const { uploading, images } = this.state;
  
    const content = () => {
 
      switch(true) {
        case uploading: 
          return <PostPhotoImageLoading />
        case images.length > 0: 
          return <PostPhotoImages images={images} removeImage={this.removeImage} />
        default: 
          return <PostPhotoButtons onChange={this.onChange} /> 
      }
       
    } 
  
    return (

      <div>
        <div>
          {content() }
        </div>
      </div>

    )
 
  }
 
}

