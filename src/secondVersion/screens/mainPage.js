import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact'
import MainNavBar from '../components/mainNavBar';
import LargeItem from '../components/paperItems/largeItem';
import SmallItem from '../components/paperItems/smallItem';
import Groups from '../components/clustering/groups';
import PaperList from '../sampleData/sampleListOfDocuments.json'

const MainPage = () => {

    const [activeView, setActiveView] = useState("list")
    const [activeGrouping, toggleActiveGrouping] = useState(false)
    const [papers, setPapers] = useState(PaperList);

    let d = 0;
    let d2 = 0;

    return (
        <div>
            <MainNavBar />
            <MDBContainer>
                <div className="papersList">
                    {
                        activeGrouping ? (
                            <Groups />
                        ) : null
                    }
                    <MDBRow>
                        <MDBCol size="3">
                            <div className="changeView" >
                                <MDBIcon
                                    title="view documents in list"
                                    icon="list-ul"
                                    className={["changeViewIcon", activeView == "list" ? "activeView" : ""]}
                                    onClick={() => { setActiveView("list") }}
                                />
                                <MDBIcon
                                    title="view documents in grid"
                                    icon="th-large"
                                    className={["changeViewIcon", activeView == "grid" ? "activeView" : ""]}
                                    onClick={() => { setActiveView("grid") }}
                                />
                            </div>
                        </MDBCol>
                        <MDBCol size="8" />
                        <MDBCol size="1">
                            <div className="groupIcon">
                                <MDBIcon
                                    onClick={() => { toggleActiveGrouping(!activeGrouping) }}
                                    icon="folder-plus"
                                    className={["groupingIcon", activeGrouping ? "activeGrouping" : ""]}
                                    title="create document sets"
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>




                    {
                        activeView == "list" ?
                            papers.map(doc => {
                                d += 200
                                return (
                                    <LargeItem
                                        title={doc.title}
                                        publishYear={doc.publishYear}
                                        authors={doc.authors}
                                        abstract={doc.abstract}
                                        id={doc._id}
                                        delay={d+"ms"}
                                    />
                                )
                            })
                            : (
                                <MDBRow>
                                    {
                                        papers.map(doc => {
                                            d2 += 200
                                            return (
                                                <MDBCol sm="6" md="3" lg="2" >
                                                    <SmallItem 
                                                        title={doc.title}
                                                        publishYear={doc.publishYear}
                                                        authors={doc.authors}
                                                        id={doc._id}
                                                        delay={d2+"ms"}
                                                    />
                                                </MDBCol>
                                            )
                                        })
                                    }
                                </MDBRow>
                            )
                    }
                </div>
            </MDBContainer>
        </div>
    )
}

export default MainPage