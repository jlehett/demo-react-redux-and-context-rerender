import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import ReactStateRerenderDemo from '@pages/ReactStateRerenderDemo';
import BadContextDemo from '@pages/BadContextDemo';
import ContextGotchaDemo from '@pages/ContextGotchaDemo';
import GoodContextDemo from '@pages/GoodContextDemo';
import BadReduxDemo from '@pages/BadReduxDemo';
import GoodReduxDemo from '@pages/GoodReduxDemo';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react-state-rerender-demo" element={<ReactStateRerenderDemo/>}/>
                <Route path="/bad-context-demo" element={<BadContextDemo/>}/>
                <Route path="/context-gotcha-demo" element={<ContextGotchaDemo/>}/>
                <Route path="/good-context-demo" element={<GoodContextDemo/>}/>
                <Route path="/bad-redux-demo" element={<BadReduxDemo/>}/>
                <Route path="/good-redux-demo" element={<GoodReduxDemo/>}/>

                <Route path="/*" element={<Navigate to="/react-state-rerender-demo"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;