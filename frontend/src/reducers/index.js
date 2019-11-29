import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todos from './todos';
import quizes from './quizes';
import auth from './auth';
import { LOGOUT_SUCCESS } from '../actions/types';

const appReducer = combineReducers({
  form: formReducer,
  todos,
  quizes,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
