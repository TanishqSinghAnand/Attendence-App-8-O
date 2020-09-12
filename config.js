import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAvDg8uJ2EheQvZ4vjWNUjOQOu6YEaY8Vs",
  authDomain: "attendence-app-d5a69.firebaseapp.com",
  databaseURL: "https://attendence-app-d5a69.firebaseio.com",
  projectId: "attendence-app-d5a69",
  storageBucket: "attendence-app-d5a69.appspot.com",
  messagingSenderId: "474063712439",
  appId: "1:474063712439:web:55bb45d2cd249804f5dd32",
  measurementId: "G-1YM0GL0121"
};


  firebase.initializeApp(firebaseConfig);

export default firebase.database();