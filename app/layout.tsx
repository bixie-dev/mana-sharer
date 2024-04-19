import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Web3ModalProvider from "@/wallet-connect/Web3ModalProvider";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from "react-toastify";
import SolanaWalletProvider from "@/solana-wallet/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mana Sharer",
  description: "Connects ETH/SOL wallet and share the MANA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          <SolanaWalletProvider>
            {children}
          </SolanaWalletProvider>
        </Web3ModalProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
