import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwqvHLbIFxRVqQqE5QWkqkVKJych_QDlY",
    authDomain: "foot-shop-forum.firebaseapp.com",
    projectId: "foot-shop-forum",
    storageBucket: "foot-shop-forum.appspot.com",
    messagingSenderId: "438849358469",
    appId: "1:438849358469:web:1ca86ef23a4c0e5ff877ec",
    measurementId: "G-JS11L76RJS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};