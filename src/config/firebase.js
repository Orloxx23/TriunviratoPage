import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBLKDjgyS4ChX_MPyYVblV8f4CYAfS82GI",
    authDomain: "triunvirato-7e9c5.firebaseapp.com",
    projectId: "triunvirato-7e9c5",
    storageBucket: "triunvirato-7e9c5.appspot.com",
    messagingSenderId: "381051721887",
    appId: "1:381051721887:web:87779d678ffc50fb4eeaaa",
    measurementId: "G-PT46SGVJFJ"
}

firebase.initializeApp(firebaseConfig);

/*const auth = firebase.auth();

export { auth };*/

export default firebase;
