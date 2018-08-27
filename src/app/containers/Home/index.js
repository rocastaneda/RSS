import React from 'react'
import {helmet} from 'Components/common/Helmet'

const Home = () => {

  return [
    helmet('Home'),
    <div className="Home" key="home">
      <h1>Home component</h1>
    </div>
  ]
}

export default Home
