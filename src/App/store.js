import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import { basketReducer } from "../basket/reducers";

export default createStore(basketReducer, devToolsEnhancer());

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
