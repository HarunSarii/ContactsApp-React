import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCK86xlx5EDdJoc9Ptf7bnA8Sj0108Geuw",
  authDomain: "firecontact-f009c.firebaseapp.com",
  databaseURL: "https://firecontact-f009c-default-rtdb.firebaseio.com",
  projectId: "firecontact-f009c",
  storageBucket: "firecontact-f009c.appspot.com",
  messagingSenderId: "1005338621853",
  appId: "1:1005338621853:web:c55c6a7d77a72b7413e174",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
