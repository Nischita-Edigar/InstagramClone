import React, { Component } from 'react'
import './NavBar.css';
import Grid from '@mui/material/Grid';
import insta_log from '../../images/logo.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import Avatar from '@mui/material/Avatar';
import pp from '../../images/pp1.png'




export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className='navbar_barcontent'>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid iten xs={1}><img  className="navbar_logo" src={insta_log}  alt="insta logo0" width="110px"/></Grid>
            <Grid item xs={3}> 
            </Grid>
            <Grid item xs={3}>
              <input className='searchbar' type="search" placeholder='Search'/>
            </Grid>
            <Grid item xs={3} style={{"display":"flex"}}>
              
              <img className='navbar_img' src={home} alt="dff" width="25px"/>
              <img className='navbar_img' src={message} alt="dff" width="25px" />           
              <img className='navbar_img' src={find} alt="dff" width="25px"/>
              <img  className='navbar_img' src={react} alt="dff" width="25px"/>
              <Avatar className='navbar_img' alt="Remy Sharp" src={pp} style={{"maxWidth":"25px", "maxHeight":"25px"}} />
            </Grid>


            <Grid item xs={1}></Grid>
          </Grid>
        </div>
        
      </div>
    )
  }
}
