import { Provider } from 'react-redux';
import PageNavButton from '@utils/PageNavButton';
import store from './parts/Store';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './BadReduxDemo.module.scss';

/**
 * This page will demonstrate how a poorly-optimized Redux store can cause unnecessary re-renders
 * of components.
 */
function BadReduxDemo() {
    return (
        <Provider store={store}>
            <div className={localStyles.pageContent}>

                {/* Navigation Content */}
                <header>
                    <PageNavButton currentPage="/bad-redux-demo" type="prev"/>
                    <h1>Bad Redux Optimization Demo</h1>
                    <PageNavButton currentPage="/bad-redux-demo" type="next"/>
                </header>

                {/* Main Content */}
                <PlatformSupportList/>

            </div>
        </Provider>
    );
}

export default BadReduxDemo;