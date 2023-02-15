import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = (): JSX.Element => {
  return (
    <>
      <Link to={'/useEffects1'}> useEffects1 </Link>
      <br />
      <Link to={'/useEffects2'}> useEffects2 </Link>
      <br />
      <Link to={'/useEffects3'}> useEffects3 </Link>
      <br />
      <Link to={'/useState1'}> useState1 </Link>
      <br />
      <Link to={'/useState2'}> useState2 </Link>
      <br />
      <Link to={'/commonparent'}> commonparent </Link>
      <br />
      <Link to={'/beforereducer'}> beforereducer </Link>
      <br />
      <Link to={'/afterreducer1'}> afterreducer1 </Link>
      <br />
      <Link to={'/afterreducer2'}> afterreducer2 </Link>
      <br />
      <Link to={'/contextapp1'}> contextapp1 </Link>
      <br />
      <Link to={'/withEffects'}> withEffects </Link>
      <br />
      <Link to={'/withoutEffects'}> withoutEffects </Link>
      <br />
      <Link to={'/syncEffects'}> syncEffects </Link>
      <br />
      <Link to={'/customhooks'}> customhooks </Link>
      <br />
      <Link to={'/withoutEffects'}> withoutEffects </Link>
    </>
  )
}

export default Homepage
