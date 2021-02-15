import React from 'react'
import { MDBAnimation } from 'mdbreact'

const SmallItem = ({delay, title, publishYear, id}) => {
    let c_ = title.length > 20 ? "..." : ""
    return (
        <MDBAnimation type="zoomIn" duration="1200ms" delay={delay} >
            <div 
                className="paperSmallItem" 
                style={{width : "100%", marginTop: 0, marginBottom: 0}}
                title={title}
            >
                <div className="smallItemTitle">{title.substring(0 , 20) + c_}</div>
                <div className="smallItemPublishYear">{publishYear}</div>
            </div>
        </MDBAnimation>
    )
}

export default SmallItem