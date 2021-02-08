import React from 'react'
import {
    MDBAnimation
} from 'mdbreact'


const LargeItem = ({delay, title, abstract, publishYear, authors, id}) => {
    let c_ = abstract.length > 249 ? "..." : ""
    return (
        <MDBAnimation type="zoomIn" duration="1000ms" delay={delay}>
            <div 
                draggable 
                className={"paperItem"}
                onDragStart={(e)=>{e.dataTransfer.setData("_id" , id)}}
            >
                <h5 className="paperTitle">{title}</h5>
                <p>{authors.map(author=>(author.name + " - ")) + publishYear}</p>
                <p className="paperAbstract">{abstract.substring(0 , 250)+c_}</p>
            </div>
        </MDBAnimation>
    )
}

export default LargeItem