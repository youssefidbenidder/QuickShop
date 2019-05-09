import {applyMiddleware, createStore} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/combineReducers"
const Store = createStore(reducers , applyMiddleware(reduxThunk));
export default Store;