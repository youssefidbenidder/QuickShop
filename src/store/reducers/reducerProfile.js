const initialState = {
    profile : {
        username : "",
        email : "",
        sexe : "",
    }
};

const reducerProfile =  (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER":
            return action.payload || null;
        case "UPDATE_USER":
            state.profile.nom = action.payload; // à modifié setState ou nextState et update_sexe et les autres champs
            return state;
        case "LOGOUT_ADMIN":
            return action.payload || null;
        default:
            return state;
    }
};
export default reducerProfile;