import React, {useMemo} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/app/store';
import {useAppSelector} from './redux/app/hooks';
import {NativeRouter, Route, Link} from 'react-router-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {TailwindProvider} from 'tailwindcss-react-native';
import {Header} from './components/Header';
import {clusterApiUrl} from '@solana/web3.js';
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import ConnectButton from './components/ConnectButton';
import DisconnectButton from './components/DisconnectButton';
import {
  createDefaultAddressSelector,
  createDefaultAuthorizationResultCache,
  SolanaMobileWalletAdapter,
} from '@solana-mobile/wallet-adapter-mobile';
import {WalletAdapterNetwork} from '@solana/wallet-adapter-base';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

const App = () => {
  const user = useAppSelector(state => state.user);

  const network = WalletAdapterNetwork.Devnet; // 'devnet', 'testnet', or 'mainnet-beta'
  const wallets = useMemo(
    () => [
      new SolanaMobileWalletAdapter({
        addressSelector: createDefaultAddressSelector(),
        appIdentity: {
          name: 'My app',
          uri: 'https://myapp.io',
          icon: 'relative/path/to/icon.png',
        },
        authorizationResultCache: createDefaultAuthorizationResultCache(),
        cluster: network,
      }),
      /* ... other wallets ... */
    ],
    [network],
  );

  return (
    // Wallet wrappers
    <ConnectionProvider endpoint={clusterApiUrl(WalletAdapterNetwork.Devnet)}>
        {/* CSS wrappers */}
        <TailwindProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            {/* Storage/routing wrappers */}
            <ReduxProvider store={store}>
              <NativeRouter>
                <Header />
                <ConnectButton color="primary" />
              </NativeRouter>
            </ReduxProvider>
          </ApplicationProvider>
        </TailwindProvider>
    </ConnectionProvider>
  );
};

export default App;
