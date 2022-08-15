import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { AnchorProvider } from '@project-serum/anchor';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import {Web3MobileWallet} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import useAuthorization from '../utils/useAuthorization';

const commitment = "processed"

export default async function getProvider(wallet: Web3MobileWallet, connection: Connection, pk: PublicKey) {
    if (!wallet || !wallet.signTransactions) throw new WalletNotConnectedError();

    const signerWallet = {
        signTransaction: async (txn: Transaction) => (await wallet.signTransactions({transactions: [txn]}))[0],
        signAllTransactions: async (txns: Transaction[]) => await wallet.signTransactions({transactions: txns}),
        publicKey: pk
    };

    const provider = new AnchorProvider(
      connection, signerWallet, { preflightCommitment: commitment }
    );
    
    return provider;
  }