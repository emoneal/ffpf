import React, { useContext } from 'react'
import Party from './Party.js'
import { UserContext } from '../context/UserProvider.js'




export default function PartyList(props) {
    const { parties } = useContext(UserContext)
    return (
        <div className="party-list">
            { parties.map(partyItem => <Party {...partyItem} key={partyItem._id} />)}
        </div>
    )
}