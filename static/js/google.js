// Google Sign-In
document.getElementById('google-signin').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      window.location.href = '/view';
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('message').innerText = `Error: ${errorMessage}`;
    });
});
