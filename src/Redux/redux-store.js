import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import HeaderReducer from "./HeaderReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    header: HeaderReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;