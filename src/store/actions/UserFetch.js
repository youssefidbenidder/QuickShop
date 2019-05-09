import Firebase from "../../firebase/Firebase";

export const  fetchUser =  () =>   dispatch => {
    Firebase.auth.onAuthStateChanged( user => {
        if(user !== null)
         Firebase.database.ref('users/' + user.uid).on('value', async (snapshot) => {
            await dispatch(
                {
                    type: "FETCH_USER",
                    payload: snapshot.val(),
                }
            )
        })
    });
};
