import firebase from "firebase/app";
import "firebase/auth";  
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTHy9D224jSKCjwBuM9xJbGyxwcD4o6h0",
  authDomain: "instagram-clone-5cde1.firebaseapp.com",
  projectId: "instagram-clone-5cde1",
  storageBucket: "instagram-clone-5cde1.appspot.com",
  messagingSenderId: "49042684039",
  appId: "1:49042684039:web:06c983199fa7088eeaa022"
};

// // // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const storage = firebase.storage();
export {auth, storage}







// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig ={
//       apiKey: "AIzaSyDTHy9D224jSKCjwBuM9xJbGyxwcD4o6h0",
//       authDomain: "instagram-clone-5cde1.firebaseapp.com",
//       projectId: "instagram-clone-5cde1",
//       storageBucket: "instagram-clone-5cde1.appspot.com",
//       messagingSenderId: "49042684039",
//       appId: "1:49042684039:web:06c983199fa7088eeaa022"
//     };
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);