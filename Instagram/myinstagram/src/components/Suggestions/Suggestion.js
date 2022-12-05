import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import './Suggestions.css'
import imageSrc from '../../images/pp1.png';

export default class Suggestion extends Component {
  render() {
    return (
      <div>
        <div className='suggestions_container'>
          <div className='suggestions_header'>
            <div>Suggestions For You </div>
          </div>
          <div className='suggestions_body'>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 1</div>
            </div>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 2</div>
            </div>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 3</div>
            </div>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 4</div>
            </div>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 5</div>
            </div>
            <div className='suggestions_friends'>
                <Avatar src={imageSrc} className="suggestions_image"/>
                <div className='suggestions_username'>Friend 6</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
