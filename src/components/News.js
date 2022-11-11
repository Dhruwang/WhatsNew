import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:'6',
    category:'general'

  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  articles = []
  constructor() {
    super();
    this.state = {
      article: this.articles,
      loading: false,
      page: 1,

    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6f544932ea2440cb5979ed8049f729e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();

  }
  handlePrevClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    })
    this.updateNews()
  }
  handleNextClick = async () => {
    await this.setState({page: this.state.page + 1})
    this.updateNews()
  }

  render() {
    return (
      <div className='container'>
        <h1 className='my-4 text-center'>WhatsNew - Trending news</h1>
        <div className='text-center align-middle'>
          {this.state.loading && <Spinner />}
        </div>

        <div className='row'>
        
          {!this.state.loading && this.state.article.map((element) => {
            // console.log(element.title)
            return <div className='col-md-4' key={element.url} >
              < NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage===null?'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png':element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt.substring(0,10)} />
            </div>
          })}
        </div>
        <div className='container d-flex justify-content-between my-4'>
          <button disabled={this.state.page === 1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>	&larr; Previous</button>
          <button disabled={this.state.page === Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div >
    )
  }
}
