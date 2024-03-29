import { Button } from '@psionic/ui';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../BadReduxDemo.module.scss';

/**
 * This component is a simple action button that will be used to toggle the "supported" flags for
 * each platform in the PlatformSupportList component.
 */
function ActionButton({ onClick, id, children }) {

    // Utility to track the re-render count of this component
    useTrackRerenderCount(`ActionButton-${id}`);

    // Render the action button
    return (
        <div className={localStyles.actionButton}>
            <Button
                onClick={onClick}
                variant="contained"
            >
                {children}
            </Button>
            <div className={localStyles.buttonRerenderCount}>
                <span>Button Re-render Count:</span>
                <RerenderCount emitEventName={`ActionButton-${id}`}/>
            </div>
        </div>
    )
}

export default ActionButton;