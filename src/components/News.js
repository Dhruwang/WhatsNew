import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {


  articles = []
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false
    }
  }
    async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a6f544932ea2440cb5979ed8049f729e";
      let data = await fetch(url)
      let parsedData = await data.json();
      this.setState({article: parsedData.articles})

    }

  render() {
    return (
      <div className='container'>
        <h1 className='my-4'>WhatsNew - Trending news</h1>
        <div className='row'>
          {this.state.article.map((element) => {
            console.log(element.title)
            return <div className = 'col-md-4' key={element.url} >
            < NewsItem key = {element.url} title={element.title.slice(0,40)} description={element.description.slice(0,90)} imageUrl={element.urlToImage} newsUrl={element.url} />
        </div>
          })}
      </div>


      </div >
    )
  }
}
