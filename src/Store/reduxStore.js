import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import friendsPageReducer from './friendsPageReducer';
import { reducer as formReducer } from 'redux-form';
import usersPageReducer from './usersPageReducer';
import thunkMiddleware from 'redux-thunk';
import authReducer from './authReducer';
import appReducer from './appReducer'

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    friendsPage: friendsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;