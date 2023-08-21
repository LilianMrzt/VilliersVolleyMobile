import routeReducer from '@services/redux/reducers/RouteReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({ route: routeReducer });

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
