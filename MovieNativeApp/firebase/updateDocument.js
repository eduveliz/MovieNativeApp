import firebase from "@firebase/app";

export const updateDocument = (collection, id, object) => {
    return firebase.firestore()
        .collection(collection)
        .doc(id)
        .update(object);
};