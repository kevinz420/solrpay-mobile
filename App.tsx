import React, {type PropsWithChildren} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/store';
import {NativeRouter, Route, Link} from 'react-router-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {TailwindProvider} from 'tailwindcss-react-native';
import {Header} from './components/Header';

const App = () => {
  return (
    <TailwindProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <ReduxProvider store={store}>
          <NativeRouter>
            <Header />
            {/* <Route path="/" element={} /> */}
          </NativeRouter>
        </ReduxProvider>
      </ApplicationProvider>
    </TailwindProvider>
  );
};

export default App;
