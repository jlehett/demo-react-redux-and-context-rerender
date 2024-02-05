import RerenderCount from '@utils/RerenderCount';
import useTrackRerenderCount from '@utils/useTrackRerenderCount';
import { usePageSlice } from './PageSlice';
import PlatformSupportItem from './PlatformSupportItem';
import ActionButton from './ActionButton';
import localStyles from '../BadReduxDemo.module.scss';

function PlatformSupportList() {

    useTrackRerenderCount('PlatformSupportList');

    const {
        supportsMicrosoft,
        supportsApple,
        toggleSupportsApple,
        toggleSupportsMicrosoft,
    } = usePageSlice();

    function toggleBoth() {
        toggleSupportsMicrosoft();
        toggleSupportsApple();
    }

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