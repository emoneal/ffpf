import React, { useContext } from 'react'
import Party from './Party.js'
import PublicParty from './PublicParty.js'
import { UserContext } from '../context/UserProvider.js'
import Accordion from 'react-bootstrap/Accordion'




export default function PartyList(props) {
    const { parties } = useContext(UserContext)
    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen className="party">
                {console.log(parties)}
                { parties.map(partyItem => <PublicParty 
                parties={parties}  
                rolesNeeded={partyItem.rolesNeeded}
                {...partyItem} 
                key={partyItem._id} 
                />)}
            </Accordion>
        </div>
    )
}