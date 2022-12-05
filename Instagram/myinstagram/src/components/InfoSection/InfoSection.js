import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import './InfoSection.css'
import imageSrc from '../../images/pp1.png'

export default class infoSection extends Component {
  render() {
    return (
        <div>
            <div className='info_container'>
                <Avatar src={imageSrc} className="info_image"/>
                <div>
                    <div className='info_username'>Sara_Smith</div>
                    <div className='info_description'>Description</div>
                </div>
            </div>
        </div>
      
    )
  }
}
