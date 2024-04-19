import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, optimism, base, arbitrum, sepolia } from 'wagmi/chains'

import env from '@/lib/config/general'

// Get projectId at https://cloud.walletconnect.com
export const projectId = env.WALLET_CONNECT_PROJECT_ID;

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: env.WALLET_CONNECT_ORIGIN!, // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [optimism, base, arbitrum, mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  // storage: createStorage({
  //   storage: cookieStorage
  // }),
  // ...wagmiOptions // Optional - Override createConfig parameters
})