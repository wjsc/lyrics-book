import firebase from 'firebase'
let config = {
  apiKey: "AIzaSyBv37NFIp-hcmltWjtcwZFVY_H-dfMm5pw",
  authDomain: "lyrics-book-5b367.firebaseapp.com",
  databaseURL: "https://lyrics-book-5b367.firebaseio.com",
  projectId: "lyrics-book-5b367",
  storageBucket: "lyrics-book-5b367.appspot.com",
  messagingSenderId: "886177869564"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
