import React from 'react'
import { WagmiConfig, createClient, configureChains } from 'wagmi'

import { polygonMumbai } from '@wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

// Configure chains & providers with the Alchemy provider.
const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: 'zbb2S5U003yKXZ6F8i_6zq9M1orgBeke' })]
)

// Set up client
const client = createClient({
  autoConnect: true, // automatically use the provider that was used before the last refresh
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true
      }
    })
  ],
  provider, // provider - returned from configureChains
  webSocketProvider // fallback provider
})

interface WagmiProviderProps {
  children: React.ReactNode
}

export const WagmiProvider: React.FC<WagmiProviderProps> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>
}
