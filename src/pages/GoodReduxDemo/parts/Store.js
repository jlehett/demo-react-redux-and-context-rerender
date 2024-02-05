/**
 * This file contains the Redux store that will be used for this demo page.
 */

import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './PageSlice';

// Configure the store to contain the "Page" Slice
const store = configureStore({
    reducer: {
        page: pageReducer,
    },
});

// Export the store
export default store;