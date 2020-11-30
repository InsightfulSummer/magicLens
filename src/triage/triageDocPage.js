import React, { useState } from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBIcon,
    MDBAnimation,
    MDBRow,
    MDBCol
} from 'mdbreact';
import Elements from '../data/paper.json'

const TriageDocPage = () => {

    const [elements, setElements] = useState(Elements)
    const [activeTriage, toggleActiveTriage] = useState(false)
    const [triageOption, setTriageOption] = useState("summary")

    const switchOption = (e) => {
        console.log(e)
    }

    return (
        <div>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <p onClick={() => { toggleActiveTriage(!activeTriage) }}>Triage</p>
                </MDBNavbarBrand>
            </MDBNavbar>
            <MDBContainer style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div id="mainContent" style={activeTriage ? { filter: "blur(10px)" } : {}}>
                    {
                        elements.map(element => (
                            <div className="elementContainer" key={element.id}>
                                {
                                    element.tag == "h2" ? (
                                        <h2 style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</h2>
                                    ) : element.tag == "h4" ? (
                                        <h4 style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</h4>
                                    ) : element.tag == "p" ? (
                                        <p style={{ textAlign: element.align, fontWeight: element.style }}>{element.content}</p>
                                    ) : element.tag == "img" ? (
                                        <div style={{ textAlign: "center" }}>
                                            <img className="figImg" src={require("../data/figs/" + element.content).default}></img>
                                            <p className="figCaption">{element.caption}</p>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))
                    }
                </div>
            </MDBContainer>
            {
                activeTriage ? (
                    <MDBAnimation type="bounceInDown" id="triageLens">
                        <MDBRow>
                            <MDBCol>
                                <p onClick={()=>{setTriageOption("summary")}} className="lensOption" style={triageOption == "summary" ? {cursor:"default" , fontSize: '22px' , textDecoration: "underline", color: "blue"} : {cursor:"pointer"}}>Summary</p>
                            </MDBCol>
                            <MDBCol>
                                <p onClick={()=>{setTriageOption("headings")}} className="lensOption" style={triageOption == "headings" ? {cursor:"default" , fontSize: '22px' , textDecoration: "underline", color: "blue"} : {cursor:"pointer"}}>Headings & Emphasis</p>
                            </MDBCol>
                            <MDBCol>
                                <p onClick={()=>{setTriageOption("visuals")}} className="lensOption" style={triageOption == "visuals" ? {cursor:"default" , fontSize: '22px' , textDecoration: "underline", color: "blue"} : {cursor:"pointer"}}>Visuals</p>
                            </MDBCol>
                            <MDBCol>
                                <p onClick={()=>{setTriageOption("metadata")}} className="lensOption" style={triageOption == "metadata" ? {cursor:"default" , fontSize: '22px' , textDecoration: "underline", color: "blue"} : {cursor:"pointer"}}>Meta Data</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBContainer>
                            {
                                triageOption == "summary" ? 
                                    elements.map(element => {
                                        return(
                                            <div>
                                                {
                                                    element.type == "functional" ? (
                                                        <p>{element.content}</p>
                                                    ) : null
                                                }
                                            </div>
                                        )
                                    })
                                : triageOption == "headings" ? 
                                    elements.map(element => {
                                        return (
                                            <div>
                                                {
                                                    element.type == "title" ? (
                                                        <p>{element.content}</p>
                                                    ) : null
                                                }
                                            </div>
                                        )
                                    })
                                : triageOption == "visuals" ? 
                                    elements.map(element => {
                                        return (
                                            <div>
                                                {
                                                    element.type == "figure" ? (
                                                        <div style={{textAlign: "center"}}>
                                                            <img className="figImg" src={require("../data/figs/"+element.content).default} />
                                                            <p className="figCaption">{element.caption}</p>
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        )
                                    }) : elements.map(element => {
                                        return (
                                            <div>
                                                {
                                                    element.type == "meta-data" ? (
                                                        <p>{element.content}</p>
                                                    ) : null
                                                }
                                            </div>
                                        )
                                    })
                            }
                        </MDBContainer>
                    </MDBAnimation>
                ) : null
            }
        </div>
    )
}

export default TriageDocPage