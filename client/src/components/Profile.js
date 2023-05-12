import React, { useContext, useState, useEffect } from 'react'
import Party from './Party.js'
import PartyList from './PartyList.js'
import PartyForm from './PartyForm.js'
import { UserContext } from '../context/UserProvider.js'
import { PartyContext } from '../context/PartyProvider.js'
import { Accordion } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

export default function Profile() {
    const {
        user: {
            username
        },
        getUserParties
    } = useContext(UserContext)

    const {
        addParty,
        parties,
        getAllParties,
        editParty,
        deleteParty

        
    } = useContext(PartyContext)

    useEffect(() => {
        getUserParties()
    },[])

    return (
        <div className="profile-container">
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you {username}!</Alert.Heading>
            </Alert>
            <div className="profile">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Add A Party</Accordion.Header>
                        <Accordion.Body>
                            <PartyForm addParty={addParty} />
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Edit Profile</Accordion.Header>
                        <Accordion.Body>
                            Coming soon...
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>My Parties</Accordion.Header>
                        <Accordion.Body>
                            <PartyList 
                            parties={parties} 
                            editParty={editParty}
                            deleteParty={deleteParty}
                            />
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </div>
        </div>
    )
}