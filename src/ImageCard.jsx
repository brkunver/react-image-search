import React, { Component } from 'react'
import './styles/imagecard.css'
export default class ImageCard extends Component {
  render() {
    return (
      <div className='col-lg-6 col-sm-12'>
        <div className='card ImageCard' >
          <img src={this.props.image} alt="image" />
          <div class="card-body">
            <p class="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
