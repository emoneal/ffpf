import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


const jobs = ['PLD', 'WAR', 'DRK', 'GNB', 'WHM', 'SCH', 'AST', 'SGE', 'MNK', 'DRG', 'NIN', 'SAM', 'RPR', 'BRD', 'MCH', 'DNC', 'BLM', 'SMN', 'RDM', 'BLU']

export default function EditForm(props) {


    const initInputs = {
        title: "" || props.title,
        description: "" || props.description,
        eventStartTime: "" || props.eventStartTime,
        rolesNeeded: [] || props.rolesNeeded
    
    }

    const [inputs, setInputs] = useState(initInputs)
    const { editParty } = props

    
    function handleCheckbox(e){
        const {name, value} = e.target
        setInputs(prev => ({
            ...prev,
            rolesNeeded: [...prev.rolesNeeded, value]
        }))
    }

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
        
    }
    console.log(inputs)
    function handleSubmit(e) {
        e.preventDefault()
        editParty(inputs)
        setInputs(initInputs)
    }


    const { title, description, eventStartTime, rolesNeeded } = inputs

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="text"
                    value={inputs.title}
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
                    value={inputs.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Control 
                    type="date"
                    value={inputs.eventStartTime}
                    name="eventStartTime"
                    placeholder="Event Start Time..."
                    onChange={handleChange}
                    
                />
            </Form.Group>

            <ToggleButtonGroup value={rolesNeeded} type="checkbox" className="mb-2">
                {jobs.map((job, idx) => (
                <ToggleButton 
                    key={idx}
                    id={idx} 
                    value={job}
                    name={inputs.rolesNeeded}
                    onChange={handleCheckbox}
                >
                {job}
                </ToggleButton>
            ))}            
                
            </ToggleButtonGroup>

            <br />
            <br />
            <Button className="btn btn-primary btn-small centerButton" variant="primary" type="submit">Edit Party</Button>
        </Form>
    )

}