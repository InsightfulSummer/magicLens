import React, { useState } from 'react'
import {
    MDBAnimation, MDBCol, MDBIcon, MDBRow
} from 'mdbreact';
import documentList from '../../sampleData/sampleListOfDocuments.json';
import GroupItem from '../paperItems/groupItem'

const Group = ({ last, remove }) => {

    const [dropping, toggleDropping] = useState(false)
    const [documents, setDocuments] = useState([])

    const dropComplete = (e) => {
        toggleDropping(false);
        let _id = e.dataTransfer.getData("_id");
        let matchId = documents.find(doc => { return doc._id == _id })
        if (matchId == undefined) {
            let documentItem = documentList.find(doc => { return doc._id == _id })
            let tmp = [...documents, documentItem]
            setDocuments(tmp)
            console.log(documents)
        }
    }

    const renderCells = () => {
        let docNum = documents.length
        if (docNum < 4) {
            return (
                <div>
                    <MDBRow>
                        <MDBCol>
                            <div className="groupCell">
                                {
                                    documents.length > 0 ? (
                                        <GroupItem
                                            title={documents[0].title}
                                            publishYear={documents[0].publishYear}
                                        />
                                    ) : null
                                }
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="groupCell">
                                {
                                    documents.length > 1 ? (
                                        <GroupItem
                                            title={documents[1].title}
                                            publishYear={documents[1].publishYear}
                                        />
                                    ) : null
                                }
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <div className="groupCell">
                                {
                                    documents.length > 2 ? (
                                        <GroupItem
                                            title={documents[2].title}
                                            publishYear={documents[2].publishYear}
                                        />
                                    ) : null
                                }
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="groupCell"></div>
                        </MDBCol>
                    </MDBRow>
                </div>
            )
        } else {
            let numRows = Math.floor(Math.sqrt(docNum))
            let numCols = Math.ceil(docNum / numRows)
            let emptyArray = Array(numRows).fill(0)
            return (
                <div>
                    {
                        emptyArray.map((a, i) => (
                            <MDBRow>
                                {
                                    documents.slice(i * numCols, (i + 1) * numCols).map(doc => {
                                        console.log(doc)
                                        return (
                                            <MDBCol>
                                                <div className="groupCell">
                                                    <GroupItem 
                                                        title={doc.title}
                                                        publishYear={doc.publishYear}
                                                    />
                                                </div>
                                            </MDBCol>
                                        )
                                    })
                                }
                            </MDBRow>
                        ))
                    }
                </div>
            )
        }
    }

    return (
        <MDBAnimation type="zoomIn" duration="1200ms">
            <div
                className="groupContainer"
                style={dropping ? { transform: "scale(1.15)", backgroundColor: "#d7edff" } : {}}
                onDragOver={(e) => { e.preventDefault() }}
                onDragLeave={() => { toggleDropping(false) }}
                onDragEnter={() => { toggleDropping(true) }}
                onDrop={dropComplete}
            >

                {renderCells()}
                {
                    last ? (
                        <MDBIcon icon="times-circle" className="removeGroupIcon" onClick={() => { remove(); }} />
                    ) : null
                }
                {
                    documents.length > 0 ? (
                        <MDBIcon icon="trash-alt" className="clearGroup" title="remove all documents" onClick={() => { setDocuments([]) }} />
                    ) : null
                }
            </div>
        </MDBAnimation>
    )
}

export default Group;