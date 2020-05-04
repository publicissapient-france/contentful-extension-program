import { combineReducers } from 'redux';
import sessions from './sessions';
import extension from './extension';
import visibility from './visibility';

export default combineReducers({
    sessions,
    extension,
    visibility
});
