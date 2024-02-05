/**
 * This file contains a Redux "Slice" that is used to manage the state of the page.
 */

import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the slice; we will be tracking the "supported" flags for
// each platform here
const initialState = {
    supportsMicrosoft: false,
    supportsApple: false,
};

// Create the slice using RTK
export const pageSlice = createSlice({
    name: 'page',
    initialState,
    // Define some reducers to handle the state changes
    reducers: {
        toggleSupportsMicrosoft: state => {
            state.supportsMicrosoft = !state.supportsMicrosoft;
        },
        toggleSupportsApple: state => {
            state.supportsApple = !state.supportsApple;
        },
    }
});

// Export a function that returns the appropriate support selector given the platform
export function getSupportForPlatformSelector(platform) {
    return state => state.page[`supports${platform}`];
}

// Export the reducer as the default export
export default pageSlice.reducer;

// Export the actions
export const { toggleSupportsMicrosoft, toggleSupportsApple } = pageSlice.actions;