import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {


  articles = []
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false,
      page:1,
      maxPages :1
    }
  }
    async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f544932ea2440cb5979ed8049f729e";
      let data = await fetch(url)
      let parsedData = await data.json();
      this.setState({
        article: parsedData.articles,
        
      })

    }
    handlePrevClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f544932ea2440cb5979ed8049f729e&page=${this.state.page-1}&pageSize=20`;
      let data = await fetch(url)
      let parsedData = await data.json();
      this.setState({
        page:this.state.page -1,
        article: parsedData.articles})
    }
    handleNextClick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f544932ea2440cb5979ed8049f729e&page=${this.state.page+1}&pageSize=20`;
      let data = await fetch(url)
      let parsedData = await data.json();
      this.setState({
        page:this.state.page +1,
        article: parsedData.articles})
    }

  render() {
    return (
      <div className='container'>
        <h1 className='my-4'>WhatsNew - Trending news</h1>
        <div className='row'>
          {this.state.article.map((element) => {
            console.log(element.title)
            return <div className = 'col-md-4' key={element.url} >
            < NewsItem key = {element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
          })}
      </div>
          <div className='container d-flex justify-content-between my-4'>
          <button disabled = {this.state.page===1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
          <button disabled = {this.state.page=== Math.ceil(this.state.totalResults / 20)}type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
</div >
    )
  }
}
