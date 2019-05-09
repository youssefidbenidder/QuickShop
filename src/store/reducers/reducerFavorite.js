// import Firebase from "../../firebase/Firebase";
// let data;
// let elements;
// Firebase.database.ref('users/' + Firebase.auth.currentUser.uid + '/wishList/').on('value', snapshot => {
//      data = snapshot.val();
//     elements = Object.values(data);
//
// })

const initialState = { favoritesProduct: [] }

function toggleFavorite(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'TOGGLE_FAVORITE':

            const favoriteProductIndex = state.favoritesProduct.findIndex(item => item.id === action.value.id);
            if (favoriteProductIndex !== -1) {
                nextState = {
                    ...state,
                    favoritesProduct: state.favoritesProduct.filter( (item, index) => index !== favoriteProductIndex)
                }
            }
            else {
                nextState = {
                    ...state,
                    favoritesProduct: [...state.favoritesProduct, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default toggleFavorite