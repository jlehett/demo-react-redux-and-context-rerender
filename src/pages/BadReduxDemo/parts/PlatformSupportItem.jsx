import {
    Check,
    Close,
} from '@mui/icons-material';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../BadReduxDemo.module.scss';

/**
 * The individual item component for the platform support list. This component will display the
 * platform name and an icon indicating whether or not the platform is supported.
 */
function PlatformSupportItem({ platform, supported }) {

    // Utility to track the re-render count of this component
    useTrackRerenderCount(`PlatformSupportItem-${platform}`);

    // Render the platform name and the support icon
    return (
        <div className={localStyles.platformSupportItem}>
            <div>
                <span>{platform}</span>
                {
                    supported
                        ? <Check className={localStyles.supportedIcon} />
                        : <Close className={localStyles.unsupportedIcon} />
                }
            </div>
            <div className={localStyles.itemRerenderCount}>
                <span>Item Re-render Count:</span>
                <RerenderCount emitEventName={`PlatformSupportItem-${platform}`}/>
            </div>
        </div>
    );
}

export default PlatformSupportItem;