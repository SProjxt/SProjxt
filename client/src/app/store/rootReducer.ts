import { combineReducers } from 'redux';
import elementReducer from './element/reducer';
import authReducer from './feature/Auth/reducer';

const rootReducer = combineReducers({
  element: elementReducer,
  auth: authReducer,
});

export default rootReducer;
