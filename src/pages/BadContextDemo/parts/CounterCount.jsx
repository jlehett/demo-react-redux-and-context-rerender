import { useContext } from 'react';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import RerenderCount from '@utils/RerenderCount';
import CounterContext from './CounterContext';
import localStyles from '../BadContextDemo.module.scss';

/**
 * Component to render the current count from the CounterContext.
 */
function CounterCount() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('CounterCount');

    // Grab the count value from the CounterContext
    const { count } = useContext(CounterContext);

    // Render the count
    return (
        <div className={localStyles.countWrapper}>
            <div className={localStyles.count}>
                Count: {count}
            </div>
            <div className={localStyles.countRerenderCount}>
                <span>Count Re-render Count:</span>
                <RerenderCount emitEventName="CounterCount"/>
            </div>
        </div>
    );
}

export default CounterCount;