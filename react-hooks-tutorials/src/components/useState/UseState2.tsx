/* eslint-disable @typescript-eslint/space-before-function-paren */
import React, { useState } from 'react'

const Form: React.FC = (): JSX.Element => {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('Hi!')
  if (isSent) {
    return <h1>Your message is on its way!</h1>
  }
  return (
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
  )
}

function sendMessage(message: string): void {
  console.log(message)
}

export default Form
