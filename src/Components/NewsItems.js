import React, { Component } from 'react'
import './newsitem.css'
import Notfound from './notfound'
export class NewsItems extends Component {
    render() {
let {title, description, ImageUrl, newsUrl, publishedAt, author,source} = this.props
        return (
            <div>
                       <div className="card m-3" style={{width: "20rem"}}>
                       <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"80%",zIndex:"1"}}>
                           {source.name}
    
                            </span>
          
                    
                    
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
}



export default NewsItems
