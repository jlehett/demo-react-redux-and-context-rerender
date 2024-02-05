import { Provider } from 'react-redux';
import PageNavButton from '@utils/PageNavButton';
import store from './parts/Store';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './GoodReduxDemo.module.scss';

/**
 * This page will demonstrate how to optimize Redux to prevent unnecessary re-renders of components.
 */
function GoodReduxDemo() {
    return (
        <Provider store={store}>
            <div className={localStyles.pageContent}>

                {/* Navigation Content */}
                <header>
                    <PageNavButton currentPage="/good-redux-demo" type="prev"/>
                    <h1>Good Redux Optimization Demo</h1>
                    <PageNavButton currentPage="/good-redux-demo" type="next"/>
                </header>

                {/* Main Content */}
                <PlatformSupportList/>

            </div>
        </Provider>
    );
}

export default GoodReduxDemo;