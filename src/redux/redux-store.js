import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduser';

let reducers = combineReducers({
    Profile: profileReducer,
    Dialogs: dialogsReducer
});

let store = createStore(reducers);

export default store;