import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function PublicParty(props) {
    const { title, description, rolesNeeded, user, username, parties, _id } = props

    const roles = rolesNeeded.map(item => {
        return (
            
                <span>{item + " "}</span>
            
        )
    })

    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header><h2>{title}</h2></Accordion.Header>
            <Accordion.Body>
                <h3>{ description }</h3>
                <p className="roles-needed">Roles Needed:</p>
                <p>{ roles }</p>
                <p>Posted by: {user.username}</p>
            </Accordion.Body>
        </Accordion.Item>
    
    )
}