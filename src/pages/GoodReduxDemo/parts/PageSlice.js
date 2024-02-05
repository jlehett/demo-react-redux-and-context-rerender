import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    supportsMicrosoft: false,
    supportsApple: false,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
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