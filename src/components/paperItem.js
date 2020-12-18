import React from 'react'
import { } from 'mdbreact'


const PaperItem = ({ title, authors, publishYear, abstract, on,  activePaper, id_ }) => {
    return (
        <div className={activePaper == -1 ? "paperItem" : activePaper == id_ ? "paperItem activePaperItem" : "paperItem blurPaperItem"} onMouseOver={on}>
            <h5 className="paperTitle">{title}</h5>
            <p>
                {
                    authors.map(author => (
                        <span className="authorName">{author.name + " - "}</span>
                    ))
                }
                <span className="pubYear">{publishYear}</span>
            </p>
            
            <p className="paperAbstract">{abstract.substring(0 , 250) + " ..."}</p>
        </div>
    )
}

export default PaperItem