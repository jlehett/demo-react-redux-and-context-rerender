import {
    Check,
    Close,
} from '@mui/icons-material';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../ReactStateRerenderDemo.module.scss';

function PlatformSupportItem({ platform, supported }) {

    useTrackRerenderCount(`PlatformSupportItem-${platform}`);

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