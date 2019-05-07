import {createStore} from "redux";
import {createDocument, deleteDocument, updateDocument} from "./firebase";
import firebase from "@firebase/app";

const reducer = (state, action) => {
    if (action.type === "ADD_NEW_ADMIN") {
        return createDocument("admins", action.admin)
    } else if (action.type === "DELETE_ADMIN") {
        return deleteDocument("admins", action.adminId)
    } else if (action.type === "UPDATE_ADMIN") {
        return updateDocument("admins", action.admin.id, action.admin)
    }
    return state
};

const fetchCollection = () => {
    const returnArray = [];
    firebase.firestore()
        .collection("admins")
        .onSnapshot(snapshot => {
            snapshot.forEach(childSnapshot => {
                const item = childSnapshot.data();
                item.id = childSnapshot.id;
                returnArray.push(item);
            });
        });
    return returnArray;
};


export default createStore(reducer, {currentAdmins: fetchCollection()});