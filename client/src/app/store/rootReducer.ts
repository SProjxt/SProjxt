import { combineReducers } from 'redux';
import elementReducer from './element/reducer';

const rootReducer = combineReducers({
  element: elementReducer,
});

export default rootReducer;
