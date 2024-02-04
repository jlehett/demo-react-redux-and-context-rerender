import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './ReactStateRerenderDemo.module.scss';

function ReactStateRerenderDemo() {
    return (
        <div className={localStyles.pageContent}>
            <h1>React State Re-Render Demo</h1>
            <PlatformSupportList/>
        </div>
    );
}

export default ReactStateRerenderDemo;