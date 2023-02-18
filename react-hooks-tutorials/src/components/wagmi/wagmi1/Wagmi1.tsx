/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const Wagmi1: React.FC = () => {
  const { connector: activeConnector, isConnected, address } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  const ConnectMetamask: React.FC = () => {
    let connectorId: any
    for (let i = 0; i < connectors.length; i++) {
      if (connectors[i].name === 'MetaMask') {
        connectorId = i
      }
    }

    const connector: any = connectors[connectorId]

    return (
      <button
        disabled={!connector.ready}
        key={connector.id}
        onClick={() => {
          connect({ connector })
        }}
      >
        Connect Metamask
        {isLoading && pendingConnector?.id === connector.id && ' (connecting)'}
      </button>
    )
  }

  const DisconnectMetamask: React.FC = () => {
    const { disconnect } = useDisconnect()

    return (
      <>
        <div>Connected to {activeConnector?.name} Provider </div>
        <div>The connected account address is {address} </div>
        <button
          onClick={() => {
            disconnect()
          }}
        >
          Disconnect
        </button>
      </>
    )
  }

  return (
    <>
      {isConnected ? (
        <>
          <DisconnectMetamask />
        </>
      ) : (
        <ConnectMetamask />
      )}

      {error && <div>{error.message}</div>}
    </>
  )
}

export default Wagmi1
