const addAdmin = admin => {
    return {
        type: "ADD_NEW_ADMIN",
        admin
    }
};

const removeAdmin = adminId => {
    return {
        type: "DELETE_ADMIN",
        adminId
    }
};

export {addAdmin, removeAdmin};