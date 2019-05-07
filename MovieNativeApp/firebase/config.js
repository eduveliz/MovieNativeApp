import firebase from '@firebase/app';
import '@firebase/firestore';
import "@firebase/auth";
import "@firebase/storage";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBz4LmFTRXiguqUf_cMqlWi2VUGxkajSvM",
    authDomain: "fir-auth-1fd71.firebaseapp.com",
    databaseURL: "https://fir-auth-1fd71.firebaseio.com",
    projectId: "fir-auth-1fd71",
    storageBucket: "fir-auth-1fd71.appspot.com",
    messagingSenderId: "22693938054",
    appId: "1:22693938054:web:0e6357eec5ea11de"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export {
    storage,
    auth
};
