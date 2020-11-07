import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9hydDk0LPQN_T0jxB3Hcz15aKYEhBiNk",
    authDomain: "facebook-clone-470ff.firebaseapp.com",
    databaseURL: "https://facebook-clone-470ff.firebaseio.com",
    projectId: "facebook-clone-470ff",
    storageBucket: "facebook-clone-470ff.appspot.com",
    messagingSenderId: "552884221608",
    appId: "1:552884221608:web:d2d7c8318cb40d5dcb349d",
    measurementId: "G-4PLSN0QCHJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;