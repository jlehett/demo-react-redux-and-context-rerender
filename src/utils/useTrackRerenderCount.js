import { useRef } from 'react';
import { emit } from '@psionic/emit';

/**
 * Tracks the number of times the component using this hook has rerendered.
 *
 * @param {string} emitEventName The name of the event to emit when the component rerenders
 * @returns {number} The number of times the component has rerendered.
 */
function useTrackRerenderCount(emitEventName) {

    // Track the re-render count in a ref; this prevents the count from being reset when the component re-renders,
    // and it also prevents the count from causing the component to re-render when it changes (as opposed to tracking
    // the count in state).
    const rerenderCount = useRef(0);

    // Increment the count each time the component re-renders; this hook will be called every time the component
    // renders, so the count will be accurate.
    rerenderCount.current += 1;

    // Use the @psionic/emit package to emit an event that the count has changed; this will allow the count to be
    // displayed in the UI.
    emit(emitEventName, { rerenderCount: rerenderCount.current });

    // Return the current re-render count.
    return rerenderCount.current;
}

export default useTrackRerenderCount;
