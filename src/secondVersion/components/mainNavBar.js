import React, { useState, useEffect } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav, MDBNavItem
} from "mdbreact";

const MainNavBar = () => {

    // const [isOpen, toggleIsOpen] = useState(false)

    return (
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                InsightLab
            </MDBNavbarBrand>
        </MDBNavbar>
    )
}

export default MainNavBar