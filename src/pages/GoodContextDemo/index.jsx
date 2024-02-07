import PageNavButton from '@utils/PageNavButton';
import CounterModule from './parts/CounterModule';
import localStyles from './GoodContextDemo.module.scss';

/**
 * This page will demonstrate how a well optimized React Context can prevent unnecessary re-renders.
 */
function GoodContextDemo() {
    return (
        <div className={localStyles.pageContent}>

            {/* Navigation Content */}
            <header>
                <PageNavButton currentPage="/good-context-demo" type="prev"/>
                <h1>Good Context Optimization Demo</h1>
                <PageNavButton currentPage="/good-context-demo" type="next"/>
            </header>

            {/* Main Content */}
            <CounterModule/>

        </div>
    )
}

export default GoodContextDemo;