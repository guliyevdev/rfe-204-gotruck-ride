import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  distance: null,
  phoneNumber: null,
  truckCategory: null,
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
    updatePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    updateTruckCategory: (state, action) => {
      state.truckCategory = action.payload;
    }
  },
});

export const { updateOrigin, updateDestination,updateDistance,updateTruckCategory,updatePhoneNumber } = mapDirectionsSlice.actions;

export default mapDirectionsSlice.reducer;