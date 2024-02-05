import { Provider } from 'react-redux';
import PageNavButton from '@utils/PageNavButton';
import store from './parts/Store';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './GoodReduxDemo.module.scss';

function GoodReduxDemo() {
    return (
        <Provider store={store}>
            <div className={localStyles.pageContent}>
                <header>
                    <PageNavButton currentPage="/good-redux-demo" type="prev"/>
                    <h1>Good Redux Optimization Demo</h1>
                    <PageNavButton currentPage="/good-redux-demo" type="next"/>
                </header>
                <PlatformSupportList/>
            </div>
        </Provider>
    );
}

export default GoodReduxDemo;