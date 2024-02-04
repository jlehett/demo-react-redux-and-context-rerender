import useRerenderCount from './useRerenderCount';

/**
 * Component to display the re-render count of the component emitting `emitEventName`.
 */
function RerenderCount({ emitEventName }) {

    // Get the re-render count of the component emitting `emitEventName`, and track it in state
    // so this component can display the count live in the UI.
    const rerenderCount = useRerenderCount(emitEventName);

    // Render a simple counter to display the re-render count.
    return <span>{rerenderCount}</span>;
}

export default RerenderCount;