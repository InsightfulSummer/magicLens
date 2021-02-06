import React from 'react'
import {
    MDBAnimation
} from 'mdbreact'


const LargeItem = ({delay}) => {
    return (
        <MDBAnimation type="zoomIn" duration="1000ms" delay={delay}>
            <div draggable className={"paperItem"}>
                <h5 className="paperTitle">I know what you are reading – Recognition of Document Types Using Mobile Eye Tracking</h5>
                <p>
                    Kai Kunze - Yuzuko Utsumi - Yuki Shiga - Koichi Kise - (2013)
            </p>
                <p className="paperAbstract">Reading is a ubiquitous activity that many people even perform in transit, such as while on the bus or while walking. Tracking reading enables us to gain more insights about expertise level and potential knowledge of users – towards a reading log tracking and improve knowledge acquisition. As a first step towards this vision, ...</p>
            </div>
        </MDBAnimation>
    )
}

export default LargeItem