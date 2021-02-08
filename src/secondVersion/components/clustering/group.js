import React, {useState} from 'react'
import {
    MDBAnimation, MDBIcon
} from 'mdbreact'

const Group = ({last, remove}) => {

    const [dropping , toggleDropping] = useState(false)
    const [documents , setDocuments] = useState([])

    const dropComplete = (e) => {
        toggleDropping(false);
        let _id = e.dataTransfer.getData("_id");
        // firstly check if a document with the same id is in the group or not ...
        // if not, add the document to the list of documents of this group ...
        // based on the number of documents in the group the grid system of the table should change ...
        // we should use a presentation close to small Item to show the relevant document ...
    }

    return (
        <MDBAnimation type="zoomIn" duration="1200ms">
            <table 
                className="groupContainer"
                style={dropping ? {transform : "scale(1.15)", backgroundColor: "#d7edff"} : {}} 
                onDragOver={(e) => { e.preventDefault()}}
                onDragLeave={()=>{toggleDropping(false)}}
                onDragEnter={()=>{toggleDropping(true)}}
                onDrop={dropComplete}
            >
                {
                    last? (
                        <MDBIcon icon="times-circle" className="removeGroupIcon" onClick={() => { remove(); }} />
                    ) : null
                }
                <tr>
                    <td>
                        <div className="groupCell"></div>
                    </td>
                    <td>
                        <div className="groupCell"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="groupCell"></div>
                    </td>
                    <td>
                        <div className="groupCell"></div>
                    </td>
                </tr>
            </table>
        </MDBAnimation>
    )
}

export default Group;