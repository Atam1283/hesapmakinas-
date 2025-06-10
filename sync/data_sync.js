const firebase = require('firebase/app');
require('firebase/database');

const firebaseConfig = require('../config/firebase_config.json');
firebase.initializeApp(firebaseConfig);

function syncUserData(userId, data) {
  firebase.database().ref(`users/${userId}`).set(data);
}

function getUserData(userId) {
  return firebase.database().ref(`users/${userId}`).once('value');
}

module.exports = { syncUserData, getUserData };
