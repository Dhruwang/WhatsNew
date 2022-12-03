import React, { Component } from 'react'

const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,theme} = props;
    return (
      <div className="card " style={{width: "30 rem",height:"250px",marginBottom:"20px",backgroundImage:`url(${imageUrl})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div className={`card-body ${theme==='dark'?'bg-dark':''}`}>
          <a href={newsUrl} target="blank">
          <div className='card-content'>
          <h5 className={`card-title ${theme==='dark'?'text-light':''}`}>{title}</h5>
          <p className='description'>{description}</p>

          </div>
          </a>
        </div>  
      </div>
    )
}
export default NewsItem