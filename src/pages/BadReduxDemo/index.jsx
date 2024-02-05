import { Provider } from 'react-redux';
import PageNavButton from '@utils/PageNavButton';
import store from './parts/Store';
import PlatformSupportList from './parts/PlatformSupportList';
import localStyles from './BadReduxDemo.module.scss';

function BadReduxDemo() {
    return (
        <Provider store={store}>
            <div className={localStyles.pageContent}>
                <header>
                    <PageNavButton currentPage="/bad-redux-demo" type="prev"/>
                    <h1>Bad Redux Optimization Demo</h1>
                    <PageNavButton currentPage="/bad-redux-demo" type="next"/>
                </header>
                <PlatformSupportList/>
            </div>
        </Provider>
    );
}

export default BadReduxDemo;