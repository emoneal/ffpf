import React, { useContext } from 'react'
import Party from './Party.js'
import { UserContext } from '../context/UserProvider.js'




export default function PartyList(props) {
    const { parties } = useContext(UserContext)
    const { deleteParty } = props

    return (
        <div className="party-list">
            {console.log(parties)}
            { parties.map(partyItem => <Party 
            parties={parties}  
            rolesNeeded={partyItem.rolesNeeded}
            {...partyItem} 
            key={partyItem._id} 
            deleteParty={deleteParty}
            />)}
        </div>
    )
}