import PageNavButton from '@utils/PageNavButton';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './ReactStateRerenderDemo.module.scss';

/**
 * This page will demonstrate how React re-renders components when state changes.
 */
function ReactStateRerenderDemo() {
    return (
        <div className={localStyles.pageContent}>

            {/* Navigation Content */}
            <header>
                <PageNavButton currentPage="/react-state-rerender-demo" type="prev"/>
                <h1>React State Re-Render Demo</h1>
                <PageNavButton currentPage="/react-state-rerender-demo" type="next"/>
            </header>

            {/* Main Content */}
            <PlatformSupportList/>

        </div>
    );
}

export default ReactStateRerenderDemo;