// Specific configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwc0xzQpCRf8PSpWxGUOOygarMnZnZ8CY",
    authDomain: "test-9e968.firebaseapp.com",
    projectId: "test-9e968",
    storageBucket: "test-9e968.appspot.com",
    messagingSenderId: "417393271951",
    appId: "1:417393271951:web:ee22171c0c7e079239bcfa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in
      const uid = user.uid;
  
      // Fetch the user's identifier from Firestore
      db.collection('users').doc(uid).get().then(doc => {
        if (doc.exists) {
          const userData = doc.data();
          const userId = userData.userId;
  
          // Check if the user ID is 123
          if (userId === '123') {
            document.getElementById('welcome-message').innerText = "This text is specific to ID 123";
          } else {
            document.getElementById('welcome-message').innerText = `Your ID is ${userId}`;
          }
  
        } else {
          console.log("No such document!");
        }
      }).catch(error => {
        console.log("Error getting document:", error);
      });
    } else {
      // No user is signed in
      window.location.href = '/';
    }
  });
  