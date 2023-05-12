import React, { useContext, useState, useEffect } from 'react'
import Party from './Party.js'
import PartyList from './PartyList.js'
import PartyForm from './PartyForm.js'
import PublicPartyList from './PublicPartyList.js'
import { UserContext } from '../context/UserProvider.js'
import { PartyContext } from '../context/PartyProvider.js'
import { Accordion } from 'react-bootstrap'


export default function Public() {
    const {
        user: {
            username
        },
        getUserParties
    } = useContext(UserContext)

    const {
        addParty,
        parties,
        getAllParties
        
    } = useContext(PartyContext)

    useEffect(() => {
        getAllParties()
    },[])

    return (
        <div className="profile">
            <PublicPartyList parties={parties} />
        </div>
    )
}