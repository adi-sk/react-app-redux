import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;

    return (
        // <div className="card" style={{"width" :"18rem"}}>
        <div className="card" style={{ "margin": "15px" }}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ "zIndex": 1, "left": "90%" }}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">Author: {author ? author : "Unknown"} at {new Date(date).toLocaleString()}</small></p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Full News</a>
            </div>
        </div>
    )
}

export default NewsItem
