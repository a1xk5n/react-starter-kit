import { combineReducers } from 'redux';
import userReducer from 'main/reducers/user-reducer';

export default combineReducers({
    user: userReducer,
});
