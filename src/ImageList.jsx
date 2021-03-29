
import React, { Component } from 'react'
import ImageCard from './ImageCard'
export default class ImageList extends Component {
  


  render() {

    return (
      <div className='row' >

        {this.props.imgList.map((item, index) => (
          <ImageCard image={item.urls.regular} description={item.alt_description} />
        ))}

      </div>
    )
  }
}
