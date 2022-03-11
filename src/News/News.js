import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    pageSize = 12

    constructor() {
        super();
        this.state = {
            articles: [],
            allArticles:[],
            loading: true,
            page: 1,
            disableNext : false,
            totalPages : 0
        }
    }

    async componentDidMount(){
        let url = "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
        let data= await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles.slice(0,this.pageSize) ,
             allArticles:parsedData.articles,
             loading : false ,
              totalPages : Math.ceil(parsedData.articles.length/this.pageSize),
              page:1});
              window.scrollTo(0, 0)      
    }

    handlePrev=()=>{
        this.setState({loading : true});
        window.scrollTo(0, 0)
        setTimeout(()=> {
            let newPage = this.state.page - 1;
            this.setState({articles : this.state.allArticles.slice((newPage-1)*this.pageSize,newPage*this.pageSize) , loading : false , page : newPage,disableNext: false })
          }, 1000);
    }

    handleNext= ()=>{

        if(this.state.page + 1 <= this.state.totalPages){
            this.setState({loading : true});
            window.scrollTo(0, 0)
            setTimeout(()=> {
                let newPage = this.state.page + 1;
                let disableNext = newPage === this.state.totalPages ? true : false;
                this.setState({articles : this.state.allArticles.slice((newPage-1)*this.pageSize,newPage*this.pageSize) , loading : false , page : newPage ,disableNext: disableNext })
              }, 1000);
            
        }
        
    }

    render() {
        return (

            <>
                {
                    this.state.loading ?
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                        <>
                            <div>

                                <div className="container my-3">
                                    <div className="row">
                                        {this.state.articles.map((article) => {

                                            return <div className="col-md-4" key={article.publishedAt}>
                                                <NewsItem title={article.title} description={article.description}
                                                    imageUrl={article.urlToImage} url={article.url} />
                                            </div>
                                        })}

                                    </div>
                                    <div className="container" className="d-flex justify-content-between">
                                        <button type="button" disabled={this.state.page === 1} onClick={this.handlePrev} className="btn btn-primary">&larr; Prev</button>
                                        <button type="button" disabled={this.state.disableNext} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
                                    </div>
                                </div>
                            </div>

                        </>
                }
            </>
        )
    }
}

export default News