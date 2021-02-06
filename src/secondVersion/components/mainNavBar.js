import React, { useState, useEffect } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBIcon
} from "mdbreact";

const MainNavBar = () => {

    // const [isOpen, toggleIsOpen] = useState(false)

    return (
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <MDBIcon icon="cog" />
            </MDBNavbarBrand>
        </MDBNavbar>
    )
}

export default MainNavBar