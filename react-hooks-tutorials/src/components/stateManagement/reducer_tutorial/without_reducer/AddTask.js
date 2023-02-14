/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          // to reset the current text in input
          setText('')
          // to update the state in parent component.
          onAddTask(text)
        }}
      >
        Add
      </button>
    </>
  )
}
