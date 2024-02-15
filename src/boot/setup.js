import React from 'react';
import { StatusBar } from 'react-native';

import store from '../redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//local imports
import App from './app';

let persistor = persistStore(store);
const Setup = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <App />
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
};

export default Setup;
