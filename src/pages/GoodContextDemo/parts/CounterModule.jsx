import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import CounterCount from './CounterCount';
import CounterControls from './CounterControls';
import CounterContextProvider from './CounterContextProvider';
import localStyles from '../GoodContextDemo.module.scss';

function CounterModule() {

    useTrackRerenderCount('CounterModule');

    return (
        <CounterContextProvider>
            <div className={localStyles.counterModule}>
                <CounterCount/>
                <CounterControls/>
                <div className={localStyles.moduleRerenderCount}>
                    <span>Module Re-render Count:</span>
                    <RerenderCount emitEventName="CounterModule"/>
                </div>
            </div>
        </CounterContextProvider>
    );
}

export default CounterModule;