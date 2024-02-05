import { Button } from '@psionic/ui';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../ContextGotchaDemo.module.scss';

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
    );
}

export default ActionButton;