// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import appointmentsReducer from './appointmentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  userAppointments: appointmentsReducer,
  // Otros reducers si es necesario
});

export default rootReducer;