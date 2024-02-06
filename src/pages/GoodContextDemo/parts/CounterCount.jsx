import { useContext } from 'react';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import RerenderCount from '@utils/RerenderCount';
import { CounterContext } from './CounterContext';
import localStyles from '../GoodContextDemo.module.scss';

function CounterCount() {

    useTrackRerenderCount('CounterCount');

    const count = useContext(CounterContext);

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