import React,{useState} from 'react'
import {
    MDBRow, MDBCol, MDBIcon, MDBAnimation
} from 'mdbreact'
import Group from './group'


const Groups = () => {
    
    const [groups , setGroups] = useState([
        {
            groupId : "1"
        }
    ])

    const addGroup = () => {
        if(groups.length < 4){
            let tmpGroups = [...groups, {groupId : groups.length + 1}]
            setGroups(tmpGroups)
        }
    }

    const removeGroup = () => {
        if(groups.length > 1){
            let tmpGroups = groups;
            tmpGroups = tmpGroups.slice(0, tmpGroups.length - 1)
            setGroups(tmpGroups)
        }
    }


    return (
        <MDBAnimation type="slideInDown" duration="1200ms" className="groupsContainer">
            <MDBRow>
                {
                    groups.map((group, index) => (
                        <MDBCol sm="6" md="3" lg="3">
                            {group.groupId == groups.length && group.groupId != 1 ? (
                                <Group last={true} remove={removeGroup} />
                            ) : (
                                <Group />
                            )}
                        </MDBCol>
                    ))
                }
                {
                    groups.length < 4 ? (
                        <MDBCol sm="6" md="3" lg="3">
                            <div className="addAnotherG" onClick={addGroup}>
                                <MDBIcon icon="plus-circle" style={{ fontSize: '40px' }} />
                                <p>Add another group</p>
                            </div>
                        </MDBCol>
                    ) : null
                }
            </MDBRow>
        </MDBAnimation>
    )
}

export default Groups