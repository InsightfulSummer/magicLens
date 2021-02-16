import React from 'react'
import { MDBAnimation } from 'mdbreact'
import {useDispatch} from 'react-redux'
import {openCustomMenu} from '../../redux/actions/actions'

const SmallItem = ({delay, title, publishYear, authors, id}) => {
    let c_ = title.length > 128 ? "..." : ""

    const dispatch = useDispatch()

    const contextMenu_ = (e) => {
        e.preventDefault();
        dispatch(openCustomMenu([e.pageX, e.pageY], id))
    }

    return (
        <MDBAnimation type="zoomIn" duration="1200ms" delay={delay}>
            <div 
                className="paperSmallItem" 
                draggable
                onDragStart={(e)=>{e.dataTransfer.setData("_id" , id)}}
                onContextMenu={contextMenu_}
            >
                <div className="smallItemTitle">{title.substring(0 , 128) + c_}</div>
                <div className="smallItemAuthors">{
                    authors.map((author, index) => index < 4 ? (
                        author.name
                    ) : index > 3 ? (<p><b>...</b></p>) : null)
                }</div>
                <div className="smallItemPublishYear">{publishYear}</div>
            </div>
        </MDBAnimation>
    )
}

export default SmallItem