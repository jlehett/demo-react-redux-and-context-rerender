import { useState } from 'react';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import CounterContext from './CounterContext';
import CounterCount from './CounterCount';
import CounterControls from './CounterControls';
import localStyles from '../ContextGotchaDemo.module.scss';

function CounterModule() {

    useTrackRerenderCount('CounterModule');

    const [count, setCount] = useState(0);

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