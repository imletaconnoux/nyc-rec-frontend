import React from 'react'
import PoolContainer from './PoolContainer.js'
import BbqContainer from './BbqContainer.js'
import TennisContainer from './TennisContainer.js'
import ZooContainer from './ZooContainer.js'

export default class NYCrec extends React.Component {
  render() {
    return(
      <div>
        <PoolContainer/>
        <BbqContainer/>
        <TennisContainer/>
        <ZooContainer/>
      </div>
    )
  }
}

//add form for searching later, form renders based on user's selected category
