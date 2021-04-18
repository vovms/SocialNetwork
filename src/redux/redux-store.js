import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduser';
import gamesReducer from './games-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    Profile: profileReducer,
    Dialogs: dialogsReducer,
    Games: gamesReducer,
    Users: usersReducer
});

let store = createStore(reducers);

export default store;