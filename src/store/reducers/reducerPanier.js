// import Firebase from "../../firebase/Firebase";
// let data;
// let elements;
// Firebase.database.ref('users/' + Firebase.auth.currentUser.uid + '/wishList/').on('value', snapshot => {
//      data = snapshot.val();
//     elements = Object.values(data);
//
// })

const initialState = { panierProduct: [] }

function addToCart(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'ADD_TO_CART':

            const favoriteProductIndex = state.panierProduct.findIndex(item => item.id === action.value.id);
            if (favoriteProductIndex === -1) {
                nextState = {
                    ...state,
                    panierProduct: [...state.panierProduct, action.value]
                }
            }


            return nextState || state;
        default:
            return state
    }
}

export default addToCart