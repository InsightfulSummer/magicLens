import React, { useState } from 'react'
import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline, MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import PaperItem from '../components/paperItem'
import PaperList_ from '../data/paperList.json'
import RapidLens from '../components/rapidLens'

const PaperList = () => {

    const [sidePanel, toggleSidePanel] = useState(false)
    const [paperList_, setPaperList] = useState(PaperList_)
    const [cursorPosition, setCursorPosition] = useState([0,0]) // cursor position so that rapid lens follows it when inactive
    const [activePaperItem, setActivePaperItem] = useState(-1) // -1 means no paper is active 


    return (
        <div onMouseMove={(e)=>{setCursorPosition([e.clientX, e.clientY])}}>
            <MDBNavbar color="mdb-color darken-2" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text" onClick={()=>{toggleSidePanel(!sidePanel)}}>InsightLab</strong>
                </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                            <div className="md-form my-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search for documnets ..." aria-label="Search" />
                            </div>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
            <div className="sidePanel" style={sidePanel ? {left:0} : {left:-250}}>

            </div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size={2} />
                    <MDBCol size={8}>
                        <div onMouseLeave={()=>{setActivePaperItem(-1)}} style={{position: "relative"}}>
                            
                            {
                                paperList_.map(paper => (
                                    <PaperItem
                                        title={paper.title}
                                        authors={paper.authors}
                                        publishYear={paper.publish_year}
                                        abstract={paper.abstract}
                                        activePaper={activePaperItem}
                                        id_ = {paper.id}
                                        on={()=>{setActivePaperItem(paper.id)}}
                                    />
                                ))
                            }
                            <RapidLens
                                cursorPosition={cursorPosition}
                                activePaper={activePaperItem}
                            />
                        </div>
                    </MDBCol>
                    <MDBCol size={2} />
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default PaperList
