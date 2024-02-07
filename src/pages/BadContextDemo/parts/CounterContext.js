/**
 * In this file, we will create a single context to hold the `counter` value and the `setCounter` function.
 */

import { createContext } from 'react';

// Create a new context to hold the `counter` value + the `setCounter` function
const CounterContext = createContext();

export default CounterContext;
