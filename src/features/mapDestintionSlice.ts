import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inception: null,
  destination: null,
}

export const mapDestinationSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    updateInception: (state, action) => {
      state.inception = action.payload;
    },
    updateDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { updateInception, updateDestination } = mapDestinationSlice.actions;

export default mapDestinationSlice.reducer;