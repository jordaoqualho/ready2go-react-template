import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUsers: (state, action) => {
      state.data = action.payload;
    },
    clean: (state) => {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export const selectUser = (state) => state.user;

export const { saveUsers, clean } = userSlice.actions;

export default userSlice.reducer;
