import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
}

export const mapDirectionsSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    updateOrigin: (state, action) => {
      state.origin = action.payload;
    },
    updateDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { updateOrigin, updateDestination } = mapDirectionsSlice.actions;

export default mapDirectionsSlice.reducer;