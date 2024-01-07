import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth'; // Import your auth reducer
import userDataReducer from './user';


const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userDataReducer
  },
});


export default store;
