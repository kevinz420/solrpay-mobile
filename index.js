/**
 * @format
 */
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './redux/app/store';
import 'react-native-get-random-values'

const ReduxApp = () => {
 return (
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
 )
}

AppRegistry.registerComponent(appName, () => ReduxApp);
