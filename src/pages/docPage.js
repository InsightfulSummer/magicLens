import React, { useState } from 'react'
import DocContent from '../components/docContent'
import {
    MDBNavbar, MDBNavbarBrand, MDBIcon, MDBModal, MDBModalHeader, MDBModalBody
} from "mdbreact";

const DocPage = () => {

    const [modal, toggleModal] = useState(false)
    const [translation, toggleTranslation] = useState(false)
    const [targetLan, changeTargetLan] = useState("fr")

    return (
        <div>
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarBrand >
                    <MDBIcon icon="cog" onClick={() => { toggleModal(!modal) }} />
                </MDBNavbarBrand>
            </MDBNavbar>
            <DocContent
                activeTranslation={translation}
                targetLan={targetLan}
            />
            <MDBModal isOpen={modal} toggle={() => { toggleModal(!modal) }}>
                <MDBModalHeader toggle={() => { toggleModal(!modal) }}>Settings</MDBModalHeader>
                <MDBModalBody>
                    <div className='custom-control custom-switch' style={{textAlign:"center", margin:'25px'}}>
                        <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked'
                            defaultChecked={translation}
                            onChange={(d)=>{toggleTranslation(d.target.checked)}}
                        />
                        <label className='custom-control-label' htmlFor='customSwitchesChecked'>
                            Translation
                        </label>
                    </div>
                    {
                        translation ? (
                            <div>
                                <label>
                                Select target language
                                </label>
                                <select className="browser-default custom-select" defaultValue={targetLan} onChange={(d)=>{changeTargetLan(d.target.value)}}>
                                    <option value="fr">Frech</option>
                                    <option value="it">Italian</option>
                                    <option value="fa">Persian</option>
                                </select>
                            </div>
                        ) : null
                    }
                </MDBModalBody>
            </MDBModal>
        </div>
    )
}

export default DocPage