/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCS4l-RybpuyBlobt-mzdhnVKun5rzl1wI",
  authDomain: "friendlychat-e60b5.firebaseapp.com",
  projectId: "friendlychat-e60b5",
  storageBucket: "friendlychat-e60b5.appspot.com",
  messagingSenderId: "235099351057",
  appId: "1:235099351057:web:38ebdb0039a1eb52fe69b0"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}