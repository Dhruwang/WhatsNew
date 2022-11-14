import React, { Component } from 'react'

const NewsItem =(props)=> {
    let {title,description,imageUrl,newsUrl,author,date,theme} = props;
    return (
      <div className="card" style={{width: "30 rem",height:"600px",marginBottom:"20px"}}>
        <img src={imageUrl} className="card-img-top" alt="..." width='210px' height="200px" />
        <div className={`card-body ${theme==='dark'?'bg-dark':''}`}>
          <h5 className={`card-title ${theme==='dark'?'text-light':''}`}>{title}</h5>
          <p className={`card-text ${theme==='dark'?'text-light':''}`} >{description}</p>
          <p class={`card-text ${theme==='dark'?'text-light':''}`}><small class="text-muted">By {author} on {date}</small></p>
          <a href={newsUrl} className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
export default NewsItem