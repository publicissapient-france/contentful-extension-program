import { combineReducers } from 'redux';
import sessions from './sessions';
import extension from './extension';

export default combineReducers({
    sessions,
    extension
});
