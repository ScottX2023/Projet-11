import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    editingUserName: false,
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { firstName, lastName, userName } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.userName = userName;
        },
        updateUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
});

export const { setUserData, updateUserName, setEditingUserName } = userDataSlice.actions;

export default userDataSlice.reducer;
