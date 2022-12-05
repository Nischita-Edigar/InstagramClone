import React, { Component } from 'react';
import './LoginPage.css';
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logo.png';
import fb from '../../images/fb.png'
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import Sigin from '../Signin/Sigin';
import Signup from '../SignUp/Signup';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin: true
        }
    }
    changeLogin=()=>{
        if(this.state.isLogin)
        this.setState({isLogin:false});
        else
        this.setState({isLogin:true});

    }
  render() {
    return (
      <div>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div className='Loginpage_main'>
                    <div>
                        <img src={inst_image} width="454px" alt="instagram"/>
                    </div>
                    <div className='loginpage_rightcomponent'>
                        <div><img src={inst_logo} className='Loginpage_logo' alt="Instagram"/></div>
                        <div className='loginpage_sigin'>
                            {
                                this.state.isLogin ? <Sigin/> : <Signup/>
                            }
                            
                            <div className='login_ordiv'>
                                <div className='login_dividor'></div>
                                <div className='login_or'>OR</div>
                                <div className='login_dividor'></div>    
                                
                                                     
                            </div>
                            <div className='login_fb'>

                                   <img src={fb} height="15" weight="15" alt="fb"/>&nbsp;Log in with Facebook
                                   <div className='login_forgot'>Forgot password?</div> 
                                </div>
                                
                                <div className='loginpage_signup'>
                                    {
                                        this.state.isLogin?
                                        <div className='signup'>Don't have an account?<button onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6","backgroundColor":"white","border":"0px"}}>Sign up</button> </div> :
                                        <div className='signin'>Have an account? <button onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6","backgroundColor":"white","border":"0px"}}>Sign in</button></div>

                                    }
                            
                            
                            <div className='loginpage_downloadSection'>
                            </div>  
                            
                            
                          
                                         
                        </div>  
                        <div className='loginpage_option'>
                        <div>Get the app</div>
                                <img  alt="appstore" className='loginpage_dwing' src={appstore} width="136"/>

                                <img  alt="playstore" className='loginpage_dwing' src={playstore} width="136"/>
                            </div>      
                       
                        </div>
                        
                        
                        
                        
                      </div>
                      
                      
                </div>
                 


            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        
      </div>
    )
  }
}
