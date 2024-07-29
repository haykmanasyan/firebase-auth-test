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
      console.log(`User is signed in with UID: ${uid}`);

      // Fetch the user's identifier from Firestore
      db.collection('users').doc(uid).get().then(doc => {
          if (doc.exists) {
              const userData = doc.data();
              const userId = userData.userId;
              
              // Check fetcjed ID
              console.log(`User ID retrieved from Firestore: ${userId}`);

              // Update the welcome message based on the user ID
              const welcomeMessage = userId === '123'
                  ? "This text is specific to ID 123"
                  : `Your ID is ${userId}`;
              document.getElementById('welcome-message').innerText = welcomeMessage;

              // Fetch the signed URL for the image
              fetch(`/get-signed-url?userId=${userId}`)
                  .then(response => response.json())
                  .then(data => {
                      if (data.url) {
                        
                        // Update the image container
                          const img = document.createElement('img');
                          img.src = data.url;
                          document.getElementById('image-container').appendChild(img);
                      } else {
                          console.error("Error: No URL returned");
                      }
                  })
                  .catch(error => {
                      console.error("Error fetching signed URL:", error);
                  });
          } else {
              console.log("No such document!");
          }
      }).catch(error => {
          console.error("Error getting document:", error);
      });
  } else {
      // No user is signed in
      window.location.href = '/';
  }
});
