import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
   let {title,description,imgurl, newsUrl} = this.props;
    return (
      <div>
   <div className="card" >
  <img src={!imgurl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIA2iKe7X0aI/v1/1200x800.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        </div>
    )
  }
}

export default NewsItems