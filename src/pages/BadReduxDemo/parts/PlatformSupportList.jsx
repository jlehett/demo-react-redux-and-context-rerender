import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import { usePageSlice } from './PageSlice';
import PlatformSupportItem from './PlatformSupportItem';
import ActionButton from './ActionButton';
import localStyles from '../BadReduxDemo.module.scss';

/**
 * The main component housing all of the platform support UI + controls. On this page, we will be
 * tracking the "supported" flags for each platform using a poorly-optimized Redux store.
 */
function PlatformSupportList() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('PlatformSupportList');

    // Grab all of the state and actions we need from the convenience `usePageSlice` hook
    const {
        supportsMicrosoft,
        supportsApple,
        toggleSupportsApple,
        toggleSupportsMicrosoft,
    } = usePageSlice();

    // Function to toggle the "supported" flags for both platforms
    function toggleBoth() {
        toggleSupportsMicrosoft();
        toggleSupportsApple();
    }

    // Render the list of platforms and the action buttons
    return (
        <div className={localStyles.platformSupportList}>
            <ul>
                <PlatformSupportItem platform="Microsoft" supported={supportsMicrosoft}/>
                <PlatformSupportItem platform="Apple" supported={supportsApple}/>
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