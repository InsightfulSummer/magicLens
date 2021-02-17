import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact'
import MainNavBar from '../components/mainNavBar';
import DocumentsPane from './documentsPane'
import ADocumentPane from './aDocumentPane'

import {useDispatch, useSelector} from 'react-redux'
import {closeCustomMenu} from '../redux/actions/actions'

const MainPage = () => {

    const dispatch = useDispatch()
    const {showMenu, numberOfPanes} = useSelector(state => ({
        showMenu : state.customOptionsReducer.showMenu,
        numberOfPanes : state.paneReducer.numberOfPanes
    }))
    const closeMenuClick = () => {
        if (showMenu) {
            dispatch(closeCustomMenu())
        }
    }
    const closeMenuRightClick = (e) => {
        e.preventDefault()
        if (showMenu) {
            dispatch(closeCustomMenu())
        }
    }

    return (
        <div onClick={closeMenuClick} onContextMenu={closeMenuRightClick} style={{overflow : "hidden"}}>
            <MainNavBar />
            <MDBRow>
                <MDBCol>
                    <DocumentsPane />
                </MDBCol>
                {
                    numberOfPanes > 1 ? (
                    <MDBCol>
                        <ADocumentPane />
                    </MDBCol>
                    
                    ) : null
                }
                {
                    numberOfPanes > 2 ? (
                    <MDBCol>
                        <ADocumentPane />
                    </MDBCol>
                    
                    ) : null
                }
            </MDBRow>
        </div>
    )
}

export default MainPage