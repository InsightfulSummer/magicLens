import React from 'react'
import { MDBAnimation } from 'mdbreact'

const SmallItem = ({delay}) => {
    return (
        <MDBAnimation type="zoomIn" duration="1200ms" delay={delay}>
            <div className="paperSmallItem" draggable>
                <div className="smallItemTitle">I know what you are reading – Recognition of Document Types Using Mobile Eye Track...</div>
                <div className="smallItemAuthors">Kai Kunze <br /> Yuzuko Utsumi <br /> Yuki Shiga <br /> Koichi Kise</div>
                <div className="smallItemPublishYear">2013</div>
            </div>
        </MDBAnimation>
    )
}

export default SmallItem