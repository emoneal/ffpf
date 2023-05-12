import React from 'react'

export default function Party(props) {
    const { title, description, rolesNeeded, user, username, parties, _id } = props

    const roles = rolesNeeded.map(item => {
        return (
            
                <span>{item + " "}</span>
            
        )
    })

    return (
        <div className="party">
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            <p>{ roles }</p>
            <p>Posted by: {username}</p>
            
        </div>
    
    )
}