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

/**
 * The main component housing all of the platform support UI + controls. On this page, we will be
 * tracking the "supported" flags for each platform using a properly optimized Redux store.
 */
function PlatformSupportList() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('PlatformSupportList');

    // Get the Redux dispatch function so we can use the Redux actions needed to update the store
    const dispatch = useDispatch();

    // Functions to toggle the "supported" flags for each platform using the Redux actions + dispatch
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

    // Render the list of platforms and the action buttons
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