import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import EditForm from './EditForm.js'
import { PartyContext } from '../context/PartyProvider.js'


export default function Party(props) {
    const { title, description, rolesNeeded, user, editParty, deleteParty, parties, _id: partyId } = props

    const [editToggle, setEditToggle] = useState(false)

    const roles = rolesNeeded.map(item => {
        return (
            
                <span>{item + " "}</span>
            
        )
    })

    return (
        <div className="party">
            { !editToggle ?
            <>
            <h2>{ title }</h2>
            <h4>{ description }</h4>
            <p className="roles-needed">Roles Needed:</p>
            <p>{ roles }</p>
            <p>Posted by: {user.username}</p>
            {console.log(parties)}
            <div className="edit-delete-box">
                <Button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</Button>
                <Button onClick={() => deleteParty(partyId)}>Delete</Button>
            </div>
            </>
            :
            <EditForm 
                title={title}
                description={description}
                rolesNeeded={rolesNeeded}
                editParty={editParty}
            />
            }       
        </div>
    
    )
}