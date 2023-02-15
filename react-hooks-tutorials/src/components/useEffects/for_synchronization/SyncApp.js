/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { createConnection } from './Chat.js'

const serverUrl = 'https://localhost:1234'

export default function SyncApp() {
  const [roomId, setRoomId] = useState('general')

  console.log(
    '3. Main Parent component processing logic due to change in state.'
  )

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={(e) => {
            console.log('1. Triggering State change')
            setRoomId(e.target.value)
            console.log(
              '2. It completes the event handling function first before working on state changes'
            )
          }}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  )
}

function ChatRoom({ roomId }) {
  useEffect(() => {
    console.log(
      '6. UseEffects main: After resetting the changes, it call the useEffect now.'
    )
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      console.log(
        '5. useEffects Return: first executes the return of useEffects to reset changes. This also run in initial/first render of the component'
      )
      connection.disconnect()
    }
  }, [roomId])

  console.log(
    '4. Main child component processing begins. but 1. when first time rendered'
  )

  return <h1>Welcome to the {roomId} room!</h1>
}
