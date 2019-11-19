import { createStore } from "redux";
import {devToolEnhancer} from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducers";

export const configureStore = () => {
    const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    return store;
}
