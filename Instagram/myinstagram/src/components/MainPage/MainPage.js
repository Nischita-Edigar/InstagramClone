import React, { Component } from 'react'
import Post from '../Post/Post';
import "./MainPage.css";
import uploadImage from '../../images/upload1.png'
import  {auth, storage} from '../Firebase'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state={
      postArray:[],
      progreesBar:"",

     }
  }
  componentDidMount(){
    this.getPosts()
  }
  getPosts=()=>{
    const thisContext=this;
    // let data=[
    //   {
    //     "id":"123",
    //     "userName":"scott_dumm",
    //     "postImage":"https://irixlens.com/new/wp-content/uploads/2020/06/Scott-Dumas-zdj%C4%99cie-e1591784846568-240x300.jpg",
    //     "likes":"123"
    //   }   
    // ]
    fetch("http://localhost:8080/post")
          .then(response=>response.json())
          .then(data=>{
               thisContext.setState({postArray :data});
          });
  }
  upload=(event)=>{
    let image = event.target.files[0];
    const thisContext=this;
    if(image == null || image == undefined)
       return;
    var uploadTask = storage.ref("images").child(image.name).put(image);
    //var uploadTask = storageRef.child(image.name).put(image);

    uploadTask.on(
      "state_changed",
      function (snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({progreesBar:progress})
      },
      function(error){

      },
      function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL){
          console.log(downloadURL) ;
          let payload={
            "postId": Math.floor(Math.random()*100000),
            "userId":JSON.parse(localStorage.getItem("users")).uid,
            "postPath":downloadURL,
            "timeStamp":new Date().getTime(),
            "likeCount" : 0
          }
          const requestOptions={
            method : "POST",
            headers : {'ContentType':'application/json'},
            body : JSON.stringify(payload)
          }
          fetch("http://localhost:8080/post", requestOptions)
          .then(response=>response.json())
          .then(data=>{
              console.log(data);
              thisContext.getPosts();
          })
          .catch(error=>{
      
          })

            
          

        })
      }
    )
  }
  render() {
    return (
      <div>
        <div className='mainpage_container'>
          <div className='mainpage_divider'></div>
          <div className='fileupload'>
          <label for="file-upload"><img alt="upload iamge" className='mainpage_uloadicon' src={uploadImage}/></label>
           <input onChange={this.upload}  id="file-upload" type="file"/>
          </div>
          
          <div className='mainpage_divider'></div>
        </div>
        <div className='upload_text'>{this.state.progressBar}%-----</div>
        {/* <Post id="123"/> */}
       {/* <Post id="124"/> */}       
        {
          this.state.postArray.map((item, index)=>(
            <Post id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likes}/>
          ))
        }
        {/* <Post id="1234" userName="Scot_Dummas"postImage="https://irixlens.com/new/wp-content/uploads/2020/06/Scott-Dumas-zdj%C4%99cie-e1591784846568-240x300.jpg" likes="12345"/>
        <Post id="1234" userName="Scot_Dummas"postImage="https://irixlens.com/new/wp-content/uploads/2020/06/Scott-Dumas-zdj%C4%99cie-e1591784846568-240x300.jpg" likes="12345"/>
        <Post id="1234" userName="Scot_Dummas"postImage="https://irixlens.com/new/wp-content/uploads/2020/06/Scott-Dumas-zdj%C4%99cie-e1591784846568-240x300.jpg" likes="12345"/>
         */}
      </div>
    )
  }
}
