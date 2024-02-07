import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import CounterCount from './CounterCount';
import CounterControls from './CounterControls';
import CounterContextProvider from './CounterContextProvider';
import localStyles from '../GoodContextDemo.module.scss';

/**
 * Main component for this demo. This component will be using a two separate React Contexts
 * to manage the state of a simple counter. It will also utilize a pattern of creating a
 * separate provider component that is responsible for managing the state backing the context
 * providers and wrapping its children in the context providers.
 */
function CounterModule() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('CounterModule');

    // Render the counter module
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