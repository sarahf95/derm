import firebase from 'firebase';

// Initialnpmize Firebase
var config = {
  apiKey: 'AIzaSyDJNNRsvkbg8_t-uNC2qZ7leh-nU1CAYMg',
  authDomain: 'derm-9e375.firebaseapp.com',
  databaseURL: 'https://derm-9e375.firebaseio.com',
  projectId: 'derm-9e375',
  storageBucket: '',
  messagingSenderId: '97002691566'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;
