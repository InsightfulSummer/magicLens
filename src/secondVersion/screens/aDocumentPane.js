import React from 'react';
import { MDBAnimation } from 'mdbreact'

const ADocumentPane = () => {
    return (
        <MDBAnimation type="zoomIn" duration="1000ms" className="aDocumentPane">
            <div className="blankStatement">
                Drag a document here to open it.
            </div>
        </MDBAnimation>
    )
}

export default ADocumentPane