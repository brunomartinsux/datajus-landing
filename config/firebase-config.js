import firebase from 'firebase/app'

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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

 const fire = firebase


export default fire;