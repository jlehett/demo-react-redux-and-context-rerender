import { useState, memo } from 'react';
import localStyles from './ReactContextRerenderDemo.module.scss';

function ReactContextRerenderDemo() {
    console.log('ReactContextRerenderDemo re-rendered');

    const [count, setCount] = useState(0);

    return (
        <div className={localStyles.pageContent}>
            <h1>React Context Re-Render Demo</h1>

            <Counter count={count}/>
            <MemoizedIncrement setCount={setCount}/>
        </div>
    );
}

export default ReactContextRerenderDemo;

function Counter({ count }) {
    console.log('Counter re-rendered');

    return (
        <div>Count: {count}</div>
    );
}

function Increment({ setCount }) {
    console.log('Increment re-rendered');

    return (
        <button type="button" onClick={() => setCount(c => c + 1)}>
            Increment
        </button>
    );
}

const MemoizedIncrement = memo(Increment);