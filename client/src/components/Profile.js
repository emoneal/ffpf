import React, { useContext, useState } from 'react'
import Party from './Party.js'
import PartyList from './PartyList.js'
import PartyForm from './PartyForm.js'
import { UserContext } from '../context/UserProvider.js'
import { PartyContext } from '../context/PartyProvider.js'
import { Accordion } from 'react-bootstrap'

export default function Profile() {
    const {
        user: {
            username
        }
    } = useContext(UserContext)

    const {
        addParty,
        parties
    } = useContext(PartyContext)


    return (
        <div className="profile">
            <h1>Welcome {username}!</h1>
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
                        blert
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My Parties</Accordion.Header>
                    <Accordion.Body>
                        <PartyList parties={parties} />
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}