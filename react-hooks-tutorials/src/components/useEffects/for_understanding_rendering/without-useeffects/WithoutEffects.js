/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'

export default function WithoutEffects() {
  const ref = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // This it will always run frist, when state is changed. Phase is still rendering.
  console.log(
    'This it will always run frist, when state is changed. Still Rendering..'
  )
  if (ref & ref.current) {
    if (isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
        {console.log('Post action of button. Still Rendering..')}
      </button>
      {console.log(
        'The video HTML element is refreshed/resetted now. Still Rendering..'
      )}
      <video
        ref={ref}
        src={
          'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
        }
        loop
        playsInline
      />
      {console.log(
        'The video is awlays being resetted/re-rendered at each state update or first time component load. Still Rendering..'
      )}
      {/* To resolve this we use useEffects() which runs after all the rendering is done. */}
    </>
  )
}
