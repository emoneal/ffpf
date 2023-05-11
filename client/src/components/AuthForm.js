import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

export default function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="text"
                    size="lg"
                    value={username}
                    name="username"
                    onChange={handleChange}
                    placeholder="Username" 
                />
                <br />
                <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    
                />
                <br />
                <br />
                <Button className="btn btn-primary btn-small centerButton" variant="primary" type="submit">{ btnText }</Button>
                <Form.Label>{ errMsg }</Form.Label>
            </Form.Group>
        </Form>
    )
}