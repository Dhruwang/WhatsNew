import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '6',
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
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
  fetchMoreData = async() => {
    this.setState({page:  ++this.state.page});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6f544932ea2440cb5979ed8049f729e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      totalResults : parsedData.totalResults,
      article: this.state.article.concat(parsedData.articles),
      loading: false
    })

  };
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6f544932ea2440cb5979ed8049f729e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({
      totalResults : parsedData.totalResults,
      article: parsedData.articles,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();

  }

  render() {
    return (
      <>
        <h1 className='my-4 text-center'>WhatsNew - Trending news</h1>
        <div className='text-center align-middle'>
        </div>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className='container text-center'>
          <div className='row'>

            {this.state.article.map((element,index) => {
              // console.log(element.title)
              return <div className='col-md-4' key={index} >
                < NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage === null ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt.substring(0, 10)} />
              </div>
            })}

          </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }
}
