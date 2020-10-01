import React, { useEffect } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import NavMenu from '../components/NavMenu'
import $ from 'jquery'
import SettingForm from '../components/SettingForm'

function Settings() {

useEffect(() => {
    $('#loginForm').slideToggle()
}, [])

    function btnClick(){ 
        const name = $('#txtName').val()
        if(name==="")
        { 
            $('#txtName').animate( {height: "100px"}, 200, function(){
                $(this).animate({height:38},200)
                $(this).focus()
            })
        }
    }

    return (
        <Container>
            <NavMenu />
            <hr></hr>
            <Form style={{display:"none"}} id="loginForm">
                <Form.Row>
                    <Col>
                        <Form.Control id="txtName" placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form>
            <br></br>
            <Button onClick={btnClick} variant="info">Open Slide</Button>
            <SettingForm/>
        </Container>
    )
}

export default Settings
