import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact'
import LargeItem from '../components/paperItems/largeItem';
import SmallItem from '../components/paperItems/smallItem';
import Groups from '../components/clustering/groups';
import PaperList from '../sampleData/sampleListOfDocuments.json'
import CustomOptions from '../components/helperComponents/customOptions';
import { useDispatch, useSelector } from 'react-redux';
import {setPane} from '../redux/actions/actions'

const DocumentsPane = () => {

    // const [activeView, setActiveView] = useState("list")
    const [activeGrouping, toggleActiveGrouping] = useState(false)
    const [papers, setPapers] = useState(PaperList);

    const {numberOfPanes} = useSelector(state => ({
        numberOfPanes : state.paneReducer.numberOfPanes
    }))

    const dispatch = useDispatch()

    let d = 0;
    // let d2 = 0;

    return (
        <MDBContainer style={numberOfPanes > 1 ?{maxHeight : "94vh", overflowY : 'scroll'} : {}}>
            <div className="papersList">
                {
                    activeGrouping ? (
                        <Groups />
                    ) : null
                }
                <MDBRow>
                    <MDBCol size="1">
                        <div className="groupIcon">
                            <MDBIcon
                                onClick={() => { toggleActiveGrouping(!activeGrouping) }}
                                icon="folder-plus"
                                className={["groupingIcon", activeGrouping ? "activeGrouping" : ""]}
                                title="create document sets"
                            />
                        </div>
                        {/* <div className="changeView" >
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
                        </div> */}
                    </MDBCol>
                    <MDBCol size="10" />
                    <MDBCol size="1">
                        <div className="groupIcon">
                            <MDBIcon
                                onClick={() => { numberOfPanes == 1 ? dispatch(setPane(2)) : numberOfPanes == 2 ? dispatch(setPane(3)) : dispatch(setPane(1)) }}
                                icon={numberOfPanes == 1 ? "dice-two" : numberOfPanes == 2 ? "dice-three" : "dice-one"}
                                className={["groupingIcon"]}
                                title={numberOfPanes == 1 ? "split your screen to open a document" : numberOfPanes == 2 ? "split further to open another document" : "close all the open documents"}
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
                {
                    papers.map(doc => {
                        d += 200
                        return (
                            <LargeItem
                                title={doc.title}
                                publishYear={doc.publishYear}
                                authors={doc.authors}
                                abstract={doc.abstract}
                                id={doc._id}
                                delay={d + "ms"}
                            />
                        )
                    })
                }
                {/* {
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
                                    delay={d + "ms"}
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
                                                    delay={d2 + "ms"}
                                                />
                                            </MDBCol>
                                        )
                                    })
                                }
                            </MDBRow>
                        )
                } */}
            </div>
            <CustomOptions />
        </MDBContainer>
    )
}

export default DocumentsPane