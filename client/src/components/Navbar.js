import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

export default function Navbar(props) {
    const { logout } = props
    return (
        <div className="navbar">
            <Nav className="justify-content-center" activeKey="/profile">
                <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/public">View All Parties</Nav.Link>
                <Button variant="logout" onClick={logout}>Logout</Button>
                </Nav.Item>
            </Nav>
        </div>
    )
}