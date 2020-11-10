import { MDBCol, MDBContainer, MDBRow, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact'
import React, { useState } from 'react'
import Books from '../data/books.json'

const DocList = () => {
    const [documents, setDocuments] = useState(Books)
    const [modal, toggleModal] = useState(false)
    const [comparison, toggleComparison] = useState(false)
    const [pageNo, togglePageNo] = useState(false)
    const [publishDate, togglePublishDate] = useState(false)
    const [genre , toggleGenre] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(-1)

    return (
        <div>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand>
                    <MDBIcon icon="cog" onClick={() => { toggleModal(!modal) }} />
                </MDBNavbarBrand>
            </MDBNavbar>
            <MDBContainer>
                <MDBRow>
                    {documents.map((doc, index) => (
                        <MDBCol lg="4" md="6" sm="12">
                            <div className="bookItem" onMouseOver={()=>{setCurrentIndex(index)}}>
                                {
                                    comparison && (pageNo || publishDate || genre) && (currentIndex == index) ? (
                                        <div className="bookLens">
                                            {
                                                pageNo ? (
                                                    <div>
                                                        <p className="featureTitle">Page Number</p>
                                                        <p className="featureValue">{doc.Page_No}</p>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                publishDate ? (
                                                    <div>
                                                        <p className="featureTitle">Publish Date</p>
                                                        <p className="featureValue">{doc.Publish_date}</p>
                                                    </div>
                                                ) : null
                                            }
                                            {
                                                genre ? (
                                                    <div>
                                                        <p className="featureTitle">Genre</p>
                                                        <p className="featureValue">{doc.Genres}</p>
                                                    </div>
                                                ) : null
                                            }
                                        </div>
                                    ) : null
                                }
                                <img src={require("../data/covers/" + doc.Cover).default} className="bookCover" />
                                <p className="bookTitle">{doc.title}</p>
                                <p className="bookAuthor">{doc.Author}</p>
                            </div>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
            <MDBModal isOpen={modal} toggle={() => { toggleModal(!modal) }}>
                <MDBModalHeader toggle={() => { toggleModal(!modal) }}>Settings</MDBModalHeader>
                <MDBModalBody>
                    <div className='custom-control custom-switch' style={{textAlign:"center", margin:'25px'}}>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked'
                            defaultChecked={comparison}
                            onChange={(d)=>{toggleComparison(d.target.checked)}}
                        />
                        <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                            Comparison
                        </label>
                    </div>
                    {
                        comparison ? (
                            <div>
                                <label>
                                Select target features to start comparing
                                </label>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="pageNo" defaultChecked={pageNo} onChange={(e)=>{togglePageNo(e.target.checked)}} />
                                    <label class="custom-control-label" for="pageNo" >Page No.</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="pubDate" defaultChecked={publishDate} onChange={(e)=>{togglePublishDate(e.target.checked)}} />
                                    <label class="custom-control-label" for="pubDate" >Publish date</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="genre" defaultChecked={genre} onChange={(e)=>{toggleGenre(e.target.checked)}} />
                                    <label class="custom-control-label" for="genre" >Genres</label>
                                </div>
                            </div>
                        ) : null
                    }
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default DocList