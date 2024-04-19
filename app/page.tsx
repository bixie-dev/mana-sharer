"use client"

import { getBalance, getRC, hello } from "@/lib/api/koino";
import ConnectButton from "@/lib/components/ConnectButton";
import Input from "@/lib/components/Input";
import { decimal } from "@/lib/constants/general";
import SolanaModal from "@/solana-wallet/Modal";
// import WalletConnectButton from "@/wallet-connect/ConnectButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function Home() {
  const [rc, setRC] = useState('');
  const [mana, setMana] = useState('');
  const [wallet, setWallet] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(-1);
  const [validWallet, setValidWallet] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [solBalance, setSolBalance] = useState(-1);
  const { connection } = useConnection();
  const { publicKey, disconnect, connecting, connected, sendTransaction } = useWallet();


  useEffect(() => {
    if (mana === '' || +mana <= 0) {
      setDisabled(true);
    } else if (wallet.length < 30) {
      setDisabled(true);
    } else if (!publicKey) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [mana, wallet, publicKey]);

  useEffect(() => {
    checkBalance();
  }, [wallet]);

  const checkBalance = async () => {
    setLoading(true);
    try {
      if (wallet.trim() === "") {
        setBalance(-1);
        throw new Error('Wallet address is empty');
      }

      const balance = await getBalance(wallet);
      setBalance(balance);

      const rc = await getRC(wallet);
      setRC(rc);

      setValidWallet(true);
    } catch (e) {
      setValidWallet(false);
      // 
    }
    setLoading(false);
  }

  useEffect(() => {
    checkSolBalance();
  }, [publicKey]);

  const checkSolBalance = async () => {
    if (publicKey && connection) {
      const balance = await connection.getBalance(publicKey);
      setSolBalance(balance);
    }
  }

  const transfer = async (from: PublicKey, to: PublicKey, amount: number) => {
    const tx = new Transaction();
    tx.add(SystemProgram.transfer({
      fromPubkey: from,
      toPubkey: to,
      lamports: amount * LAMPORTS_PER_SOL,
    }));
    const sign = await sendTransaction(tx, connection);
    await connection.confirmTransaction(sign, 'processed');
  }

  const SendClick = async () => {
    setLoading(true);
    try {
      // await transfer(publicKey!, new PublicKey('8rjddjXY8esUHYvCJ37mX2ijysZrkYC3k76bgEkHXZoL'), 0.1);

      const result = await hello('Bixie');
      console.log(result);

    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  return (
    <>
      <main className="">
        <div className="bg-slate-700">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col min-[425px]:flex-row justify-between items-center h-24 md:h-20 py-2 sm:py-0">
            <div className="text-3xl font-bold">
              <span className="text-green-500">Mana</span>
              <span>Sharer</span>
            </div>
            {/* <WalletConnectButton /> */}
            {publicKey && <button className="border border-white border-solid p-2" onClick={disconnect}>{publicKey.toBase58()}</button>}
            {!publicKey && <ConnectButton onClick={() => setModalVisible(true)}>{connecting ? 'Connecting ...' : 'Connect'}</ConnectButton>}
          </div>
        </div>
        <div className="container px-4 sm:px-6 flex flex-col items-center gap-3 max-w-xl mx-auto mt-4">
          {publicKey && solBalance !== -1 && (
            <div className="self-start flex flex-col gap-2">
              <span>Available</span>
              <span>{solBalance} SOL</span>
            </div>
          )}
          <div className="w-full mt-3">
            <label htmlFor="mana" className="block text-sm font-medium leading-6">Mana</label>
            <Input type="number" id="mana" value={mana} min={0} max={9999999} onChange={e => setMana(e.target.value)} disabled={loading} />
          </div>
          <div className="w-full">
            <label htmlFor="koinos-wallet">Koinos wallet</label>
            <Input type="text" id="koinos-wallet" value={wallet} onChange={e => setWallet(e.target.value)} disabled={loading} />
          </div>
          {wallet.trim() !== '' && validWallet && (
            <div className={`mt-6 flex gap-8 ${loading ? 'opacity-35' : undefined}`}>
              <div className="flex gap-2">
                <span>{balance / Math.pow(10, decimal)}</span>
                <span>KOIN</span>
              </div>
              <div className="flex gap-2">
                <span>{+rc / Math.pow(10, decimal)}</span>
                <span>RC</span>
              </div>
            </div>
          )}
          {loading && <span className="mt-6">Loading ...</span>}
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-md mt-5">
          <button
            onClick={SendClick}
            disabled={disabled || loading || !validWallet}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
          >
            Buy MANA
          </button>
        </div>
      </main>
      {!connecting && !connected && <SolanaModal visible={modalVisible} onClose={() => setModalVisible(false)} />}
    </>
  );
}
