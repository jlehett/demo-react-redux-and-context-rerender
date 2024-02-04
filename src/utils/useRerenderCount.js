import { useState } from 'react';
import { useOnEmit } from '@psionic/emit-react';

/**
 * Hook to track the number of times the component emitting the `emitEventName` event has re-rendered.
 * This count is tracked in state, and thus will cause the component using this hook to re-render. However,
 * the component emitting the `emitEventName` event will not re-render when the count changes (unless it
 * is using this hook as well).
 *
 * @param {string} emitEventName The name of the event being emitted when the component to track is re-rendered
 * @returns {Number} The number of times the component emitting the `emitEventName` event has re-rendered
 */
function useRerenderCount(emitEventName) {

    // Track the re-render count in state; note that this is tracking the re-render count
    // of the component emitting the `emitEventName` event, not the component using this hook.
    const [rerenderCount, setRerenderCount] = useState(0);

    // When the event with the specified name is emitted, increment the re-render count.
    useOnEmit(emitEventName, () => {
        setRerenderCount(prev => prev + 1);
    });

    // Return the current re-render count.
    return rerenderCount;
}

export default useRerenderCount;
