import firebase from "@firebase/app";

export const createDocument = (collection, object) => {
    return firebase.firestore()
        .collection(collection)
        .add(object);
};