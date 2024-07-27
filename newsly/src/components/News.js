import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div>
        News is a Component
        <NewsItems/>
      </div>
      
    )
  }
}

export default News