import React, { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from 'mdbreact'
import MainNavBar from '../components/mainNavBar';
import DocumentsPane from './documentsPane'

import {useDispatch, useSelector} from 'react-redux'
import {closeCustomMenu} from '../redux/actions/actions'

const MainPage = () => {

    
    const [windowWidth, setWidth] = useState(window.innerWidth)

    const dispatch = useDispatch()
    const {showMenu} = useSelector(state => ({
        showMenu : state.customOptionsReducer.showMenu
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

    window.addEventListener('resize' , (e) => {
        setWidth(e.target.innerWidth)
    })

    return (
        <div onClick={closeMenuClick} onContextMenu={closeMenuRightClick} style={{overflow : "hidden"}}>
            <MainNavBar />
            <MDBRow>
                <MDBCol>
                    <DocumentsPane />
                </MDBCol>
                <MDBCol></MDBCol>
            </MDBRow>
            {
                windowWidth > 1500 ? (
                    <div className="splitIconContainer" title="split your screen">
                        <MDBIcon icon="columns" className="splitIcon" />
                    </div>
                ) : null
            }
        </div>
    )
}

export default MainPage