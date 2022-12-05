import { Avatar } from '@mui/material'
import React, { Component } from 'react'
import "./StatusBar.css"
// import Avatar from '@mui/material/Avatar';
import statusimg from '../../images/pp1.png'
import uploadImage from '../../images/statusadd.png'

export default class StatusBar extends Component {
    constructor(props){
        super(props);
        this.state={
            statusList: []
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData=()=>{
        let data=[
           {
            "username":"sara_smith",
            "imageURL":'../../images/pp1.png'
           },
           {
            "username":"testing_data",
            "imageURL":'../../images/pp1.png'
            },
            {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               },
               {
                "username":"sara_smith",
                "imageURL":'../../images/pp1.png'
               }
        ]
        this.setState({statusList:data});

    }
  render() {
    return (
      <div>
        <div className='statusbar_container'>
        <img src={uploadImage} className="statusbar_upload" alt="add story" />
          {/* <div className='upload_story'>Your story</div> */}
          
          
          
            {
                this.state.statusList.map((item,index)=>(
                    <div className='status'>
                     
          
                  <Avatar className='statusbar_status' alt="michel13" src={statusimg}/>
                  <div className='statusbar_text'>{item.username}</div>
            </div>

                ))
            }
            
        </div>
      </div>
    )
  }
}

