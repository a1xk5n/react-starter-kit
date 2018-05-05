import { handleActions } from 'redux-actions';

import UserReducerRecord from 'main/records/user-reducer-record';

const userReducer = handleActions({}, new UserReducerRecord());

export default userReducer;
