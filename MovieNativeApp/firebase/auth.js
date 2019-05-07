import {auth} from './config';
import firebase from "@firebase/app";

export const doSignInWithEmailAndPassword = (email, password, thenFunction, catchFunction) => {
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => auth.signInWithEmailAndPassword(email, password).then(thenFunction).catch(catchFunction))
        .catch(error => console.log(error));
};

export const signInAnonymously = () =>
    signInAnonymously();

export const doSignOut = () => {
    sessionStorage.clear();
    auth.signOut();
};
