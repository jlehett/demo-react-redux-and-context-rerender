import {
    Check,
    Close,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getSupportForPlatformSelector } from './PageSlice';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../GoodReduxDemo.module.scss';

/**
 * This component will display the platform name and an icon indicating whether or not the platform is supported.
 */
function PlatformSupportItem({ platform }) {

    // Utility to track the re-render count of this component
    useTrackRerenderCount(`PlatformSupportItem-${platform}`);

    // Get the "supported" flag for this platform from the Redux store;
    // Calling `useSelector` tells this component to re-render whenever the value of the selector it is using changes
    const supported = useSelector(getSupportForPlatformSelector(platform));

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