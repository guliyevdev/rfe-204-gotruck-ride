import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  distance: null,
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
    updateDistance: (state, action) => {
      state.distance = action.payload;
    },
  },
});

export const { updateOrigin, updateDestination,updateDistance } = mapDirectionsSlice.actions;

export default mapDirectionsSlice.reducer;