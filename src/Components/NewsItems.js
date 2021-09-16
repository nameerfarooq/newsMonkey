import React from 'react'
import './newsitem.css'
import Notfound from './notfound'

const NewsItems = (props)=> {
   let {title, description, ImageUrl, newsUrl, publishedAt, author,source} = props
        return (
            <div>
                       <div className="card m-3">
                       <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        marginTop : "-10px"
                    }
                    }>
                        <span className="badge rounded-pill bg-danger" > {source.name} </span>
                    </div>
                    {ImageUrl?  <img src={ImageUrl } className="card-img-top imgCard" alt="..."/>:<Notfound/>}  
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted"> from {!author?"unknown":author} on {new Date(publishedAt).toUTCString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )    
}
export default NewsItems
