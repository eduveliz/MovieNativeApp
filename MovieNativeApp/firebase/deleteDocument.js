import firebase from "@firebase/app";

export const deleteDocument = (collection, id) => {
    return firebase.firestore()
        .collection(collection)
        .doc(id)
        .delete();
};