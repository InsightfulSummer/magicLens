import React from 'react'
import {
    MDBAnimation
} from 'mdbreact'
import {useDispatch} from 'react-redux'
import {openCustomMenu} from '../../redux/actions/actions'


const LargeItem = ({delay, title, abstract, publishYear, authors, id}) => {
    let c_ = abstract.length > 249 ? "..." : ""

    const dispatch = useDispatch()

    const contextMenu_ = (e) => {
        e.preventDefault();
        dispatch(openCustomMenu([e.pageX, e.pageY], id))
    }

    return (
        <MDBAnimation type="zoomIn" duration="1000ms" delay={delay}>
            <div 
                draggable 
                className={"paperItem"}
                onDragStart={(e)=>{e.dataTransfer.setData("_id" , id)}}
                onContextMenu={contextMenu_}
            >
                <h5 className="paperTitle">{title}</h5>
                <p>{authors.map(author=>(author.name + " - ")) + publishYear}</p>
                <p className="paperAbstract">{abstract.substring(0 , 250)+c_}</p>
            </div>
        </MDBAnimation>
    )
}

export default LargeItem