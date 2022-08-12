import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps, useState} from 'react';
import {Button} from './Button';

import useAuthorization from '../utils/useAuthorization';
import useGuardedCallback from '../utils/useGuardedCallback';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function ConnectButton(props: Props) {
  const {authorizeSession, selectedAccount} = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const handleConnectPress = useGuardedCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
      console.log('connected to ' + selectedAccount?.publicKey.toString())
    } finally {
      setAuthorizationInProgress(false);
    }
  }, []);
  return (
    <Button
      {...props}
      disabled={authorizationInProgress}
      onPress={(handleConnectPress)}>
      Connect
    </Button>
  );
}
