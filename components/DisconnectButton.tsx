import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps} from 'react';
import {Button} from './Button';

import useAuthorization from '../utils/useAuthorization';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function DisconnectButton(props: Props) {
  const {deauthorizeSession, selectedAccount} = useAuthorization();

  return (
    <Button
      {...props}
      onPress={() => {
        transact(async wallet => {
          await deauthorizeSession(wallet);
        });
        console.log('disconneted from ' + selectedAccount?.publicKey.toString())
      }}
    >Disconnect</Button>
  );
}
