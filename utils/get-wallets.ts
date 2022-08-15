import getProgram from "./get-program";
import { Connection, PublicKey } from "@solana/web3.js";
import { WalletType } from "../interfaces/types";
import { Web3MobileWallet } from "@solana-mobile/mobile-wallet-adapter-protocol-web3js";

export default async function getWallets(
  wallet: Web3MobileWallet,
  connection: Connection,
  pk: PublicKey
) {
  const program = await getProgram(wallet, connection, pk);

  return await program.account.wallet.all() as unknown as {publicKey: PublicKey, account: WalletType}[];
}
