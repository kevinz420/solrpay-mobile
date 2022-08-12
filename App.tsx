import React, {type PropsWithChildren} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/app/store';
import {useAppSelector} from './redux/app/hooks';
import {NativeRouter, Route, Link} from 'react-router-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {TailwindProvider} from 'tailwindcss-react-native';
import {Header} from './components/Header';
import {clusterApiUrl} from '@solana/web3.js';
import {ConnectionProvider} from '@solana/wallet-adapter-react';
import ConnectButton from './components/ConnectButton';
import DisconnectButton from './components/DisconnectButton';

const DEVNET_ENDPOINT = /*#__PURE__*/ clusterApiUrl('devnet');

const App = () => {
  const user = useAppSelector(state => state.user);

  return (
    <ConnectionProvider endpoint={DEVNET_ENDPOINT}>
      <TailwindProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <ReduxProvider store={store}>
            <NativeRouter>
              <Header />
              <ConnectButton color="primary"/>
              <DisconnectButton color="primary"/>
              {/* <Route path="/" element={} /> */}
            </NativeRouter>
          </ReduxProvider>
        </ApplicationProvider>
      </TailwindProvider>
    </ConnectionProvider>
  );
};

export default App;
