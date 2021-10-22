import { createSlice } from '@reduxjs/toolkit';

export const isUserNumber = createSlice({
  name: 'userNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    updateUserNumber: (state, action) => {
      state.value = action.payload;
  } 
},
});

export const { updateUserNumber } = isUserNumber.actions;

export const currentUserNumber = state => state.isUserNumber.value;

export default isUserNumber.reducer;
