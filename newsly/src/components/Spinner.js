import React, { Component } from 'react'
import Hourglass from './Hourglass.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className = "text-center">
        <img src={Hourglass} alt="Hourglass" />
      </div></div>
    )
  }
}

export default Spinner