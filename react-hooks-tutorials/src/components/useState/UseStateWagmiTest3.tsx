/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const UseStateWagmiTest3: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('Hi!')
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

  if (isSent) {
    return <h1>Your message is on its way!</h1>
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

      {error}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setIsSent(true)
          sendMessage(message)
        }}
      >
        <input
          id="typeing"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            console.log(message)
          }}
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

function sendMessage(message: string): void {
  console.log(message)
}

export default UseStateWagmiTest3
