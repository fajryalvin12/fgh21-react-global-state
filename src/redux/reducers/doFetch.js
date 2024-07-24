import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainData: [],
};

const doFetch = createSlice({
  name: "doFetch",
  initialState,
  reducers: {
    listData: (state, action) => {
      state.mainData = [...state.mainData, ...action.payload];
    },
  },
});

export const { listData } = doFetch.actions;
export default doFetch.reducer;
