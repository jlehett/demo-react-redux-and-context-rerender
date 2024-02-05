import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import ReactStateRerenderDemo from '@pages/ReactStateRerenderDemo';
import BadReduxDemo from '@pages/BadReduxDemo';
import GoodReduxDemo from '@pages/GoodReduxDemo';
import ContextGotchaDemo from '@pages/ContextGotchaDemo';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react-state-rerender-demo" element={<ReactStateRerenderDemo/>}/>
                <Route path="/bad-redux-demo" element={<BadReduxDemo/>}/>
                <Route path="/good-redux-demo" element={<GoodReduxDemo/>}/>
                <Route path="/context-gotcha-demo" element={<ContextGotchaDemo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;