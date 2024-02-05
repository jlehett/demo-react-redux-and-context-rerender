import { useDispatch } from 'react-redux';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import {
    toggleSupportsApple as action_toggleSupportsApple,
    toggleSupportsMicrosoft as action_toggleSupportsMicrosoft,
} from './PageSlice';
import PlatformSupportItem from './PlatformSupportItem';
import ActionButton from './ActionButton';
import localStyles from '../GoodReduxDemo.module.scss';

function PlatformSupportList() {

    useTrackRerenderCount('PlatformSupportList');

    const dispatch = useDispatch();

    function toggleSupportsMicrosoft() {
        dispatch(action_toggleSupportsMicrosoft());
    }

    function toggleSupportsApple() {
        dispatch(action_toggleSupportsApple());
    }

    function toggleBoth() {
        toggleSupportsMicrosoft();
        toggleSupportsApple();
    }

    return (
        <div className={localStyles.platformSupportList}>
            <ul>
                <PlatformSupportItem platform="Microsoft"/>
                <PlatformSupportItem platform="Apple"/>
            </ul>
            <div className={localStyles.actions}>
                <ActionButton onClick={toggleSupportsMicrosoft} id="Microsoft">
                    Toggle Microsoft Support
                </ActionButton>
                <ActionButton onClick={toggleSupportsApple} id="Apple">
                    Toggle Apple Support
                </ActionButton>
                <ActionButton onClick={toggleBoth} id="Both">
                    Toggle Both
                </ActionButton>
            </div>
            <div className={localStyles.listRerenderCount}>
                <span>List Re-render Count:</span>
                <RerenderCount emitEventName="PlatformSupportList"/>
            </div>
        </div>
    )
}

export default PlatformSupportList;