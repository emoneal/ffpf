import React, { useContext } from 'react'
import Party from './Party.js'
import PublicParty from './PublicParty.js'
import { UserContext } from '../context/UserProvider.js'




export default function PartyList(props) {
    const { parties } = useContext(UserContext)
    return (
        <div className="party-list">
            {console.log(parties)}
            { parties.map(partyItem => <PublicParty 
            parties={parties}
            className="party--single"  
            rolesNeeded={partyItem.rolesNeeded}
            {...partyItem} 
            key={partyItem._id} 
            />)}
        </div>
    )
}