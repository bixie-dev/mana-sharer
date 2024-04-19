'use client'

import { WalletName, WalletReadyState } from "@solana/wallet-adapter-base";
import { Wallet, useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  visible: boolean
  onClose: VoidFunction
}

export default function SolanaModal({ visible, onClose }: Props) {
  const { wallets: walletsData, select, connect } = useWallet();
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    setWallets(walletsData.filter(w => w.readyState === WalletReadyState.Installed));
  }, [walletsData]);

  const WalletClick = async (name: WalletName<string>) => {
    try {
      select(name);
      await connect();
    } catch (e) {
      // 
    }
  }

  return (
    <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-8 p-4 invisible opacity-0 transition-all duration-100 rounded-lg data-[visible=true]:visible data-[visible=true]:opacity-100 bg-gray-500" data-visible={visible}>
      <div className="flex flex-col gap-4">
        {wallets.length > 0 ? (
          wallets.map(wallet => (
            <div
              key={wallet.adapter.name}
              onClick={() => WalletClick(wallet.adapter.name)}
              className="flex items-center gap-4 p-4 rounded-sm bg-gray-400 cursor-pointer"
            >
              <div className="relative w-8 h-8">
                <Image src={wallet.adapter.icon} alt="" fill objectFit="cover" />
              </div>
              <span>{wallet.adapter.name}</span>
            </div>
          ))
        ) : <div>No wallets</div>}
      </div>
      <button className="self-center" onClick={onClose}>Cancel</button>
    </div>
  )
}