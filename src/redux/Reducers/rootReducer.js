import {combineReducers} from 'redux';
import customerReducer from './customerReducer';
import appointmentReducer from './appointmentReducer';


const rootReducer = combineReducers({
  customerReducer,
  appointmentReducer
});

export default rootReducer;