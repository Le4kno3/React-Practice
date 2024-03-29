import React, { useState, useEffect } from 'react'

const UseEffects1 = (): JSX.Element => {
  const [count, setCount] = useState(0)

  // Similar to (componentDidMount + componentDidUpdate):
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click me
      </button>
    </div>
  )
}

export default UseEffects1
