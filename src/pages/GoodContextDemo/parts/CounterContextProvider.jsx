/**
 * This file contains a component whose sole purpose is to provide the CounterContext and
 * SetCounterContext, and to manage the state of the counter backing those contexts.
 */

import { useState } from 'react';
import { CounterContext, SetCounterContext } from './CounterContext';

/**
 * This component is responsible for managing the state of the counter, and providing the
 * CounterContext and SetCounterContext to its children.
 */
function CounterContextProvider({ children }) {

    // State to manage the count
    const [counter, setCounter] = useState(0);

    // Wrap the children in the CounterContext and SetCounterContext providers
    return (
        <CounterContext.Provider value={counter}>
            <SetCounterContext.Provider value={setCounter}>
                {children}
            </SetCounterContext.Provider>
        </CounterContext.Provider>
    );
}

export default CounterContextProvider;