
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import contactReducer from '../src/Redux/Reducer/reducers';
const rootReducer = combineReducers({
    contact: contactReducer
});
 
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store
