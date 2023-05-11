import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const initInputs = {
    title: "",
    description: "",
    eventStartTime: "",
    rolesNeeded: []

}

const jobs = ['PLD', 'WAR', 'DRK', 'GNB', 'WHM', 'SCH', 'AST', 'SGE', 'MNK', 'DRG', 'NIN', 'SAM', 'RPR', 'BRD', 'MCH', 'DNC', 'BLM', 'SMN', 'RDM', 'BLU']

export default function PartyForm(props) {

    const [inputs, setInputs] = useState(initInputs)
    const { addParty } = props
    const [roles, setRoles] = useState([]);


    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
        console.log(inputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addParty(inputs)
        setInputs(initInputs)
    }


    const { title, description, eventStartTime, rolesNeeded } = inputs

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="text"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title" 
                />
                <br />
                <br />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="text"
                    value={description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="date"
                    value={eventStartTime}
                    name="eventStartTime"
                    placeholder="Event Start Time..."
                    onChange={handleChange}
                    
                />
            </Form.Group>

            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                {jobs.map((job, idx) => (
                <ToggleButton 
                    key={idx}
                    id={idx} 
                    value={job}
                    onChange={handleChange}
                >
                {job}
                </ToggleButton>
            ))}            
                
            </ToggleButtonGroup>

            <br />
            <br />
            <Button className="btn btn-primary btn-small centerButton" variant="primary" type="submit">Add Party</Button>
        </Form>
    )

}