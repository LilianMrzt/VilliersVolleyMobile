/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from "./src/services/redux/Store";

const store = configureStore()

const AppRedux = () => (
    <Provider store = { store }>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
