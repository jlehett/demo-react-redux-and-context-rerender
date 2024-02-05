import { useState } from 'react';
import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import PlatformSupportItem from './PlatformSupportItem';
import ActionButton from './ActionButton';
import localStyles from '../ReactStateRerenderDemo.module.scss';

/**
 * The main component housing all of the platform support UI + controls. On this page, we will be
 * tracking the "supported" flags for each platform using React state hooks.
 */
function PlatformSupportList() {

    // Utility to track the re-render count of this component
    useTrackRerenderCount('PlatformSupportList');

    // Track the the "supported" flags for each platform in state
    const [supportsMicrosoft, setSupportsMicrosoft] = useState(false);
    const [supportsApple, setSupportsApple] = useState(false);

    // Functions to toggle the "supported" flags for each platform
    function toggleSupportsMicrosoft() {
        setSupportsMicrosoft(prev => !prev);
    }

    function toggleSupportsApple() {
        setSupportsApple(prev => !prev);
    }

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