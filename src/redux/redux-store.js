import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduser';
import gamesReducer from './games-reducer';

let reducers = combineReducers({
    Profile: profileReducer,
    Dialogs: dialogsReducer,
    Games: gamesReducer
});

let store = createStore(reducers);

export default store;