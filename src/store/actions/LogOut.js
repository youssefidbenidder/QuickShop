import Firebase from "../../firebase/Firebase";

export const  logOut =  () =>   dispatch => {
    Firebase.auth.signOut().then(function() {
        // Sign-out successful.
        dispatch(
            {
                type: "LOGOUT_ADMIN",
                payload : {}
            })
    }).catch(function(error) {
        // An error happened.
    });
};
