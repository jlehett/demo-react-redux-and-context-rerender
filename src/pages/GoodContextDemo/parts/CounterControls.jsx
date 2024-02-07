import { useContext } from 'react';
import { SetCounterContext } from './CounterContext';
import ActionButton from './ActionButton';
import localStyles from '../GoodContextDemo.module.scss';

/**
 * This component is a simple set of action buttons that will be used to increment or decrement
 * the count in the CounterContext.
 */
function CounterControls() {

    // Get the setCount function from the CounterContext
    const setCount = useContext(SetCounterContext);

    // Functions to increment and decrement the count
    function incrementCount() {
        setCount(prev => prev + 1);
    }

    function decrementCount() {
        setCount(prev => prev - 1);
    }

    // Render the action buttons
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