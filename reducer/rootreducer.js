import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  // ... your other reducers here ...
  todos: todoReducer,
  form: formReducer     // <---- Mounted at 'form'
});

export default rootReducer
