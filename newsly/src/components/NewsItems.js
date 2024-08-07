import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
   let {title,description,imgurl, newsUrl,date,author,source} = this.props;
    return (
      <div>
   <div className="card" >
   <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style= {{left:'90%', zIndex:'1'}}>{source}
  </span>
  <img src={!imgurl?"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIA2iKe7X0aI/v1/1200x800.jpg":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">by {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        </div>
    )
  }
}

export default NewsItems