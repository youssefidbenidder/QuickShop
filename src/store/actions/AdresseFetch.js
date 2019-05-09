import Firebase from "../../firebase/Firebase";

export const  fetchAdresse =  () =>   dispatch => {

            Firebase.database.ref('users/' + Firebase.auth.currentUser.uid).on('value', async (snapshot) => {
                await dispatch(
                    {
                        type: "FETCH_ADRESSE",
                        payload: snapshot.val().adresse,
                    }
                )
            })
};
