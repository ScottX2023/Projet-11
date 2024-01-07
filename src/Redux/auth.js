import { createSlice } from '@reduxjs/toolkit';

const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token');
};

const initialState = {
  token: getTokenFromLocalStorage(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); 
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem('token'); 
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
