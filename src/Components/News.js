import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner.js'
import './News.css'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{

    const [articles, setarticles] = useState([]);
    const [loader, setloader] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0)


    const updateNews =  async () => {
        props.setProgress(10);
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setloader(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloader(false)
        props.setProgress(100);
    }


    useEffect(() => {
        document.title = `NewsMonkey | ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`
        updateNews(); 
        // eslint-disable-next-line
    }, [])
    
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1) ;
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults)
    };


    return (
        <>
            <h1 className="text-center header">
            NewsMonkey - {`${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`} Headlines
            </h1>
            <div className="container">
            <h5 className="text-center">NewsMonkey is a useful app which is built on REACT.js, with newsMonkey you can read Daily news, I am using NewsApi.org for 
                populating news items on daily basis, news can be populated category wise.
            </h5>
            </div>
            { loader && <Spinner/>}
                <InfiniteScroll
               dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults  }
                loader={<Spinner/>}
                >
{console.log(articles)}
                    <div className="container">
                        <div className="row">
                            {!loader && articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url} >
                                        <NewsItems title={element.title ? element.title.slice(0, 44) : "Title Not Available"}
                                            description={element.description ? element.description.slice(0, 88) : "Description Not Available"}
                                            ImageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            publishedAt={!element.publishedAt?"undefined":element.publishedAt}
                                            author={element.author}
                                            source={element.source}
                                        />
                                    </div>
                                )
                            })}
                                
                        </div>
                    </div>
                </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    coutry: "us",
    category: "general",
    pageSize: 12
}
News.propTypes = {
    coutry: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News