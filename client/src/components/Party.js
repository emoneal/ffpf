import React from 'react'

export default function Party(props) {
    const { title, description, _id } = props

    return (
        <div className="party">
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            
        </div>
    )
}