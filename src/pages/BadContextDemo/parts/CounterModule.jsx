import { useState } from 'react';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import CounterContext from './CounterContext';
import CounterCount from './CounterCount';
import CounterControls from './CounterControls';
import localStyles from '../BadContextDemo.module.scss';

/**
 * The main component for this demo. This component will be using a single React Context
 * to manage the state of a simple counter.
 */
function CounterModule() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('CounterModule');

    // State to manage the count
    const [count, setCount] = useState(0);

    // Render the counter module
    return (
        <CounterContext.Provider value={{ count, setCount }}>

            <div className={localStyles.counterModule}>
                <CounterCount/>
                <CounterControls/>
                <div className={localStyles.moduleRerenderCount}>
                    <span>Module Re-render Count:</span>
                    <RerenderCount emitEventName="CounterModule"/>
                </div>
            </div>

        </CounterContext.Provider>
    )
}

export default CounterModule;