import { configureStore } from "@reduxjs/toolkit";
import { mapDestinationSlice } from "@/features/mapDestintionSlice";


export const store = configureStore({
    reducer: {
        // Add the maps reducer
        mapDestination: mapDestinationSlice
    }
    });