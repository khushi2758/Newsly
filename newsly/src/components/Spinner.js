import React, { Component } from 'react'
import Hourglass from './Hourglass.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className = "text-center">
        <img src={Hourglass} alt="Hourglass"className='my3' />
      </div></div>
    )
  }
}

export default Spinner