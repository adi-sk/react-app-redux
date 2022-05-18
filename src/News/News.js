import React, { useState,useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

    const pageSize = 12

    const [articles, setArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [disableNext, setDisableNext] = useState(false)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        async function setupData(){
            window.scrollTo(0, 0)
            props.setProgress(10)
            let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.countryCode}.json`;
            let data = await fetch(url);
            props.setProgress(30)
            let parsedData = await data.json();
            props.setProgress(70)
            setArticles(parsedData.articles.slice(0, pageSize));
            setAllArticles(parsedData.articles);
            setLoading(false);
            setTotalPages(Math.ceil(parsedData.articles.length / pageSize));
            setPage(1);
            props.setProgress(100)
        }
    }, [])


    const handlePrev = () => {
        setLoading(true)
        window.scrollTo(0, 0)
        setTimeout(() => {
            let newPage = page - 1;
            setArticles(allArticles.slice((newPage - 1) * pageSize, newPage * pageSize));
            setLoading(false);
            setPage(newPage);
            setDisableNext(false);
        }, 1000);
    }

    const handleNext = () => {

        if (page + 1 <= totalPages) {
            setLoading(true)
            window.scrollTo(0, 0)
            setTimeout(() => {
                let newPage = page + 1;
                let disableNext = newPage === totalPages ? true : false;
                setArticles(allArticles.slice((newPage - 1) * pageSize, newPage * pageSize));
                setLoading(false);
                setPage(newPage);
                setDisableNext(disableNext);
            }, 1000);

        }

    }

    const fetchMoreData = () => {
        setTimeout(() => {
            let newPage = page + 1;
            setPage(newPage)
            setArticles(articles.concat(allArticles.slice((newPage - 1) * pageSize, newPage * pageSize)))
        }, 1500);
    };

    return (

        <>
            {
                loading ?
                    <Spinner /> :
                    <>
                        <div>
                            <InfiniteScroll
                                dataLength={articles.length}
                                next={fetchMoreData}
                                hasMore={articles.length !== allArticles.length}
                                loader={<Spinner />}
                            >
                                <div className="container">
                                    <div className="row">
                                        {articles.map((article) => {

                                            return <div className="col-md-4" key={article.publishedAt}>
                                                <NewsItem title={article.title} description={article.description}
                                                    imageUrl={article.urlToImage} url={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                                            </div>
                                        })}

                                    </div>
                                </div>
                            </InfiniteScroll>
                            {/* <div className="container d-flex justify-content-between">
                                        <button type="button" disabled={page === 1} onClick={handlePrev} className="btn btn-primary">&larr; Prev</button>
                                        <button type="button" disabled={disableNext} className="btn btn-primary" onClick={handleNext}>Next &rarr;</button>
                                    </div> */}

                        </div>

                    </>
            }
        </>
    )
}

export default News
