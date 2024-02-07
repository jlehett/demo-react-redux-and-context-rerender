import PageNavButton from '@utils/PageNavButton';
import CounterModule from './parts/CounterModule';
import localStyles from './BadContextDemo.module.scss';

/**
 * This page will demonstrate how a poorly optimized React Context can cause unnecessary re-renders
 * of components.
 */
function BadContextDemo() {
    return (
        <div className={localStyles.pageContent}>

            {/* Navigation Content */}
            <header>
                <PageNavButton currentPage="/bad-context-demo" type="prev"/>
                <h1>Bad Context Optimization Demo</h1>
                <PageNavButton currentPage="/bad-context-demo" type="next"/>
            </header>

            {/* Main Content */}
            <CounterModule/>

        </div>
    )
}

export default BadContextDemo;