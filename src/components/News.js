import React, {useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {  
  
  const [article, setarticle] = useState([])
  const [loading, setloading] = useState(false)
  let [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const fetchMoreData = async() => {
    setpage(++page)
    
    let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url)
    let parsedData = await data.json();
    settotalResults(parsedData.totalResults)
    setarticle(article.concat(parsedData.articles))
    setloading(false)

  };
  const updateNews = async()=>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json();
    setarticle(parsedData.articles)
    setloading(false)
    settotalResults(parsedData.totalResults)
    props.setProgress(100)
  }


  useEffect(() => {
      updateNews();
  }, [])


    return (
      <div className='newsMain bg-light py-2' id='news'>
        <h1 className=' text-center' id='mainHeading' style={{marginTop:'70px',marginBottom:'50px'}}>{props.category.toUpperCase()}</h1>
        <div className='text-center align-middle'>
        </div>
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={<Spinner />}
        >
          <div className='container text-center'>
          <div className='row'>

            {article.map((element,index) => {

              return <div className='col-md-6 col-lg-4' key={index} >
                < NewsItem key={element.url} theme={props.theme} title={element.title} description={element.description} imageUrl={element.urlToImage === null ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt.substring(0, 10)} />
              </div>
            })}

          </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }
News.defaultProps = {
  country: 'in',
  pageSize: '6',
  category: 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News