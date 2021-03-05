import firebase from 'firebase'

const fire = firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1EV7Sb_eFmvjwmDO9hC658KgQRpLrrVc",
    authDomain: "eighth-vehicle-304417.firebaseapp.com",
    projectId: "eighth-vehicle-304417",
    storageBucket: "eighth-vehicle-304417.appspot.com",
    messagingSenderId: "638894804849",
    appId: "1:638894804849:web:431d157b28f7bd7bf6b0d0",
    measurementId: "G-3RN8082KSQ"
  };

try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }


export default fire;