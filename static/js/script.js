// Your web app's Firebase configuration
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

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Registration
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registered successfully
      const user = userCredential.user;
      document.getElementById('message').innerText = 'Registration successful!';
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('message').innerText = `Error: ${errorMessage}`;
    });
});

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Logged in successfully
      const user = userCredential.user;
      window.location.href = '/view';
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('message').innerText = `Error: ${errorMessage}`;
    });
});
