import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import ReactStateRerenderDemo from '@pages/ReactStateRerenderDemo';
import ReactContextRerenderDemo from '@pages/ReactContextRerenderDemo';
import BadContextDemo from '@pages/BadContextDemo';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/react-state-rerender-demo" element={<ReactStateRerenderDemo/>}/>
                <Route path="/react-context-rerender-demo" element={<ReactContextRerenderDemo/>}/>
                <Route path="/bad-context-demo" element={<BadContextDemo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;