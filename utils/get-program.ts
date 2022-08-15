import getProvider from './get-provider'
import { Program, Idl } from '@project-serum/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import idl from '../interfaces/idl.json'
import { Web3MobileWallet } from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';

const programID = new PublicKey(idl.metadata.address);

export default async function getProgram(wallet: Web3MobileWallet, connection: Connection, pk: PublicKey) {
    const provider = await getProvider(wallet, connection, pk);
    
    return new Program(idl as Idl, programID, provider);
  }