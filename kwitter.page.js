const firebaseConfig = {
    apiKey: "AIzaSyA8upiMWQlMMP0W9uNaJhlI_fM__bfGAjs",
    authDomain: "kwitter-9bac8.firebaseapp.com",
    projectId: "kwitter-9bac8",
    storageBucket: "kwitter-9bac8.appspot.com",
    messagingSenderId: "152169948119",
    appId: "1:152169948119:web:9e9b0fc6424632b43f6192",
    measurementId: "G-K3229TP6M1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });