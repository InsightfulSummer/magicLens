import React,{useState} from 'react'
import {
    MDBRow, MDBCol, MDBIcon, MDBAnimation
} from 'mdbreact'


const Groups = () => {
    const [groupNumbers, changeGroupNumbers] = useState(1)
    return (
        <MDBAnimation type="slideInDown" duration="1200ms" className="groupsContainer">
            <MDBRow>
                <MDBCol size="3">
                    <table className="groupContainer" onDragOver={(e)=>{e.preventDefault();}}>
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
                </MDBCol>
                <MDBCol size="3">
                    {
                        groupNumbers >= 2 ? (
                            <MDBAnimation type="zoomIn" duration="1200ms">
                                <table className="groupContainer" onDragOver={(e)=>{e.preventDefault();}}>
                                    <MDBIcon icon="times-circle" className="removeGroupIcon" onClick={() => { changeGroupNumbers(groupNumbers - 1) }} />
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
                        ) : groupNumbers == 1 ? (
                            <div className="addAnotherG" onClick={() => { changeGroupNumbers(groupNumbers + 1) }}>
                                <MDBIcon icon="plus-circle" style={{ fontSize: '40px' }} />
                                <p>Add another group</p>
                            </div>
                        ) : null
                    }
                </MDBCol>
                <MDBCol size="3">
                    {
                        groupNumbers >= 3 ? (
                            <MDBAnimation type="zoomIn" duration="1200ms">
                                <table className="groupContainer" onDragOver={(e)=>{e.preventDefault();}}>
                                    <MDBIcon icon="times-circle" className="removeGroupIcon" onClick={() => { changeGroupNumbers(groupNumbers - 1) }} />
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
                        ) : groupNumbers == 2 ? (
                            <div className="addAnotherG" onClick={() => { changeGroupNumbers(groupNumbers + 1) }}>
                                <MDBIcon icon="plus-circle" style={{ fontSize: '40px' }} />
                                <p>Add another group</p>
                            </div>
                        ) : null
                    }
                </MDBCol>
                <MDBCol size="3">
                    {
                        groupNumbers == 4 ? (
                            <MDBAnimation type="zoomIn" duration="1200ms">
                                <table className="groupContainer" onDragOver={(e)=>{e.preventDefault();}}>
                                    <MDBIcon icon="times-circle" className="removeGroupIcon" onClick={() => { changeGroupNumbers(groupNumbers - 1) }} />
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
                        ) : groupNumbers == 3 ? (
                            <div className="addAnotherG" onClick={() => { changeGroupNumbers(groupNumbers + 1) }}>
                                <MDBIcon icon="plus-circle" style={{ fontSize: '40px' }} />
                                <p>Add another group</p>
                            </div>
                        ) : null
                    }
                </MDBCol>
            </MDBRow>
        </MDBAnimation>
    )
}

export default Groups