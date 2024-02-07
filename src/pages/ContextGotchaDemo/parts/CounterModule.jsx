import { useState } from 'react';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import { CounterContext, SetCounterContext } from './CounterContext';
import CounterCount from './CounterCount';
import CounterControls from './CounterControls';
import localStyles from '../ContextGotchaDemo.module.scss';

/**
 * The main component for this demo. This component will be using a two separate React Contexts
 * to manage the state of a simple counter.
 */
function CounterModule() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('CounterModule');

    // State to manage the count
    const [count, setCount] = useState(0);

    // Render the counter module
    return (
        <CounterContext.Provider value={count}>
            <SetCounterContext.Provider value={setCount}>

                <div className={localStyles.counterModule}>
                    <CounterCount/>
                    <CounterControls/>
                    <div className={localStyles.moduleRerenderCount}>
                        <span>Module Re-render Count:</span>
                        <RerenderCount emitEventName="CounterModule"/>
                    </div>
                </div>

            </SetCounterContext.Provider>
        </CounterContext.Provider>
    )
}

export default CounterModule;