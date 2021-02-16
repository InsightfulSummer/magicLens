import React from 'react'
import {useSelector} from 'react-redux'


const CustomOptions = () => {
    const {position, showMenu, documentId} = useSelector(state => ({
        position : state.customOptionsReducer.position,
        showMenu : state.customOptionsReducer.showMenu,
        documentId : state.customOptionsReducer.documentId,
    }))
    return (
        <div className="customOptionsContainer" style={showMenu ? {display : "block", left: position[0]+"px", top: position[1]+"px"} : {}} >
            <ul class="menu-options">
                <li class="menu-option">Back</li>
                <li class="menu-option">Reload</li>
                <li class="menu-option">Save</li>
                <li class="menu-option">Save As</li>
                <li class="menu-option">Inspect</li>
            </ul>
        </div>
    )
}

export default CustomOptions