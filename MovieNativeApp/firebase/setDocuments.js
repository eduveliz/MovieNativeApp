import firebase from "@firebase/app";

export const setDocument = (collection, id, object, merge = true) => {
    return firebase.firestore()
        .collection(collection)
        .doc(id)
        .set(object, {merge: merge});
};