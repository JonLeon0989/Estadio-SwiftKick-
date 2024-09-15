import { createStore } from 'redux';
import rootReducer from './Reducer';

const initialState = {
  user: null,
  userAppointments: [],
  // Otros estados si es necesario
};

const store = createStore(rootReducer, initialState);

export default store;