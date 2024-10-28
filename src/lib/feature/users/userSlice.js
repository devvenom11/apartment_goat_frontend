import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    addUser: (state, action) => action.payload,
    logoutUser:()=>({})
  },
});

export const { addUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;