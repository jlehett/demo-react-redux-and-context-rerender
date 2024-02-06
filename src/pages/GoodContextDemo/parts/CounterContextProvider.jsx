import { useState } from 'react';
import { CounterContext, SetCounterContext } from './CounterContext';

function CounterContextProvider({ children }) {

    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={counter}>
            <SetCounterContext.Provider value={setCounter}>
                {children}
            </SetCounterContext.Provider>
        </CounterContext.Provider>
    );
}

export default CounterContextProvider;