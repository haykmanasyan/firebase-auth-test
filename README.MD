# Basic Authentication with Email and Password

- Setup the project in the [Firebase console] (https://console.firebase.google.com)
- Copy the relevant setup code (this will go in the Javascript file)

- Install the Firebase SDK:
    - `npm install firebase`
    - May need to install npm first: `sudo apt install npm`
- Add the configuration information to the relevant Javascript file

- Initialize Firebase: `firebase.initializeApp(firebaseConfig);`
- Create a reference to Firebase authentication: `const auth = firebase.auth();`

- Setup index.html:
    - Include Firebase SDKs by CDN
    - Include Javascript
    - make sure there are forms for registration and login
    - Include a message for error reporting

- Handle form submission within the Javascript file
- Update the page/redirect, up to you
