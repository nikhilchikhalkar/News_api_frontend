import React, { Component } from 'react'
// import cardimg from '../assets/img1.jpg'

export default class NewsItem extends Component {
  render() {
    let {title, description, ImageUrl, newsUrl, author, date, Source} = this.props
    return (
      <div>
        <div className="card" >
        <span className='position-absolute top-0 translate-middle badge rounded-pill  bg-danger'  style={{left:"90%", zIndex:1}}>
    {Source}
  </span>
      <img src={ImageUrl ? ImageUrl:"https://static.toiimg.com/thumb/msid-106039739,width-1070,height-580,imgsize-43234,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}
         </h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author? "unknown":author} on {new Date(date).toTimeString()}</small></p>
        <a href={newsUrl} rel="noreferrer" target='_blank'className="btn btn-sm btn-dark ">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}
