
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAmwemQyJY3lgcmvBYa-awZ5LZcoJhk2vo",
  authDomain: "whatsappclone-rjs.firebaseapp.com",
  databaseURL: "https://whatsappclone-rjs.firebaseio.com",
  projectId: "whatsappclone-rjs",
  storageBucket: "whatsappclone-rjs.appspot.com",
  messagingSenderId: "1033366575094",
  appId: "1:1033366575094:web:f074c2bc1025db3f42d9d7",
  measurementId: "G-1H78EKC6EC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;