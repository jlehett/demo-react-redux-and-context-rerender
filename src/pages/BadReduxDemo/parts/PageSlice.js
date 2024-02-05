/**
 * This file contains a Redux "Slice" that is used to manage the state of the page.
 */

import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

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

// Export all of the selectors and actions as a single utility hook
export function usePageSlice() {

    // Use the `useDispatch` hook to provide the `dispatch` function that we can use
    // to dispatch actions to the store
    const dispatch = useDispatch();

    // Grab all of the values from state
    const supportsMicrosoft = useSelector(state => state.page.supportsMicrosoft);
    const supportsApple = useSelector(state => state.page.supportsApple);

    // Return all of the selectors and actions for convenience
    return {
        supportsMicrosoft,
        supportsApple,
        toggleSupportsMicrosoft: () => dispatch(pageSlice.actions.toggleSupportsMicrosoft()),
        toggleSupportsApple: () => dispatch(pageSlice.actions.toggleSupportsApple()),
    };
}

// Export the reducer as the default export
export default pageSlice.reducer;
