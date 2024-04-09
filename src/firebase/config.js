import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDiwwwSovsSRsKsDkePF-2lcpLF_-2hS3k",
    authDomain: "vue-blog-system-ff099.firebaseapp.com",
    projectId: "vue-blog-system-ff099",
    storageBucket: "vue-blog-system-ff099.appspot.com",
    messagingSenderId: "66853259814",
    appId: "1:66853259814:web:edae5c43400f1b985074e7"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let timeStamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timeStamp}