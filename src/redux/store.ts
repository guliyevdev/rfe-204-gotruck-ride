import { configureStore } from "@reduxjs/toolkit";
import mapDirectionsSlice from "@/features/mapDirectionsSlice";


export const store = configureStore({
    reducer: {
        // Add the maps reducer
        MapDirections: mapDirectionsSlice
    }
    });
