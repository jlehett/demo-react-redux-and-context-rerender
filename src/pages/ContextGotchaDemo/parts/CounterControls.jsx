import { useContext } from 'react';
import { Button } from '@psionic/ui';
import CounterContext from './CounterContext';
import ActionButton from './ActionButton';
import localStyles from '../ContextGotchaDemo.module.scss';

function CounterControls() {

    const { setCount } = useContext(CounterContext);

    function incrementCount() {
        setCount(prev => prev + 1);
    }

    function decrementCount() {
        setCount(prev => prev - 1);
    }

    return (
        <div className={localStyles.controls}>
            <ActionButton
                id="increment"
                onClick={incrementCount}
            >
                Increment
            </ActionButton>
            <ActionButton
                id="decrement"
                onClick={decrementCount}
            >
                Decrement
            </ActionButton>
        </div>
    );
}

export default CounterControls;