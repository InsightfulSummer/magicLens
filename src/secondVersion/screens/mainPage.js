import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact'
import MainNavBar from '../components/mainNavBar';
import LargeItem from '../components/paperItems/largeItem';
import SmallItem from '../components/paperItems/smallItem';
import Groups from '../components/groups';

const MainPage = () => {

    const [activeView, setActiveView] = useState("list")
    const [activeGrouping, toggleActiveGrouping] = useState(false)

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
                        activeView == "list" ? (
                            <div>
                                <LargeItem delay="0ms" />
                                <LargeItem delay="200ms" />
                                <LargeItem delay="400ms" />
                                <LargeItem delay="600ms" />
                                <LargeItem delay="800ms" />
                                <LargeItem delay="1000ms" />
                                <LargeItem delay="1200ms" />
                            </div>
                        ) : (
                                <MDBRow>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="0ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="200ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="400ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="600ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="800ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="1000ms" />
                                    </MDBCol>
                                    <MDBCol sm="6" md="3" lg="2" >
                                        <SmallItem delay="1200ms" />
                                    </MDBCol>
                                </MDBRow>
                            )
                    }
                </div>
            </MDBContainer>
        </div>
    )
}

export default MainPage