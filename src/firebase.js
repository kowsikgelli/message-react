import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjcJpxS-fnKF5Ec0b8VY8GvpdYl90Tvj8",
    authDomain: "message-react.firebaseapp.com",
    databaseURL: "https://message-react.firebaseio.com",
    projectId: "message-react",
    storageBucket: "message-react.appspot.com",
    messagingSenderId: "132129946071",
    appId: "1:132129946071:web:434b11beddf1e8bf76f392",
    measurementId: "G-JF2LBHVH0T"
})

const db = firebaseApp.firestore();

export default db