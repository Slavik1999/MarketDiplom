import "./index.scss";
import { Provider } from "react-redux";
import { Router, withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AppRouter from "./routes";

import store from "./store";

export const history = createBrowserHistory();

const App = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <AppRouter />
            </Router>
        </Provider>
    );
};

export default App;
