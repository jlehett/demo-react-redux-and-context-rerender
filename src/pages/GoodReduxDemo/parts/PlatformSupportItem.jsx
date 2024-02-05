import {
    Check,
    Close,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { getSupportForPlatformSelector } from './PageSlice';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import localStyles from '../GoodReduxDemo.module.scss';

function PlatformSupportItem({ platform }) {

    useTrackRerenderCount(`PlatformSupportItem-${platform}`);

    const supported = useSelector(getSupportForPlatformSelector(platform));

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