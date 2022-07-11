// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { storage } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";
// import storage from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  storageBucket: 'gs://goinggorman-2a758.appspot.com'
};

// Initialize Firebase
initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = _storage();