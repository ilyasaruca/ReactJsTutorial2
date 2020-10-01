import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import NavMenu from '../components/NavMenu'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Link() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")

    useEffect(() => {
        console.log("useEffect","call");
    },[])

    return (
        <Container>
            <Helmet>
                <title>Link Title</title>
            </Helmet>
            <NavMenu/>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={ (evt) => setName(evt.target.value) } type="text" placeholder="Name"></Form.Control>
            </Form.Group>
            <Form.Group controlId="surname">
                <Form.Label>Surname</Form.Label>
                <Form.Control onChange={ (evt) => setSurname(evt.target.value) } type="text" placeholder="Surname"></Form.Control>
            </Form.Group>

            <div>
                {name} {surname}
            </div>

            <Button variant="success"><FontAwesomeIcon icon={faPaperPlane}/> Send</Button>
            
        </Container>
    )
}

export default Link
