import PageNavButton from '@utils/PageNavButton';
import CounterModule from './parts/CounterModule';
import localStyles from './ContextGotchaDemo.module.scss';

function ContextGotchaDemo() {
    return (
        <div className={localStyles.pageContent}>

            {/* Navigation Content */}
            <header>
                <PageNavButton currentPage="/context-gotcha-demo" type="prev"/>
                <h1>React Context Gotcha Demo</h1>
                <PageNavButton currentPage="/context-gotcha-demo" type="next"/>
            </header>

            {/* Main Content */}
            <CounterModule/>

        </div>
    )
}

export default ContextGotchaDemo;