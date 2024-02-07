/**
 * This file is used to create two separate contexts: one to hold the `counter` value and
 * another to hold the `setCounter` function.
 */

import { createContext } from 'react';

// Create a new context to hold the `counter` value
export const CounterContext = createContext();

// Create a new context to hold the `setCounter` function
export const SetCounterContext = createContext();
