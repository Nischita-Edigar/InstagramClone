import React, { Component } from 'react'
import "./MainContent.css";
import Grid from '@mui/material/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestion from '../Suggestions/Suggestion'




export default class MainContent extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <div>
              <StatusBar/>
              <MainPage/>
            </div>
          </Grid>
          <Grid item xs={2}>
            <InfoSection/>
            <Suggestion/>
                      
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        
      </div>
    )
  }
}
