import PageNavButton from '@utils/PageNavButton';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './ReactStateRerenderDemo.module.scss';

function ReactStateRerenderDemo() {
    return (
        <div className={localStyles.pageContent}>
            <header>
                <PageNavButton currentPage="/react-state-rerender-demo" type="prev"/>
                <h1>React State Re-Render Demo</h1>
                <PageNavButton currentPage="/react-state-rerender-demo" type="next"/>
            </header>
            <PlatformSupportList/>
        </div>
    );
}

export default ReactStateRerenderDemo;