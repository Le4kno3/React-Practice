import React, { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const UseEffects3 = (props: any) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // return () => {
    //     ChatAPI.unsubscribeFromFriendStatus(
    //         props.friend.id,
    //         handleStatusChange
    //     );
    // };
  })

  // function handleStatusChange(status: any) {
  //   setIsOnline(status.isOnline)
  // }

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

export default UseEffects3
