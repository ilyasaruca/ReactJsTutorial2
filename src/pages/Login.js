import { Base64 } from 'js-base64'
import React, { useState } from 'react'
import { Container, Row, Form, Button, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { userLogin } from '../services'

function Login() {
    
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("") 
    const [remember, setRemember] = useState(false) 
    const [loginStatu, setLoginStatu] = useState(false) 
     

    function fncSend() {

        const params = {
            ref : "5380f5dbcc3b1021f93ab24c3a1aac24",
            userEmail: mail,
            userPass: pass,
            face : "no"
        }

        userLogin(params).then(res=>{ 
            const user = res.data.user[0]
            const durum = user.durum
            if(durum)
            { 
                const bilgiler = user.bilgiler  
                const baseString = Base64.encode(JSON.stringify(bilgiler))
                sessionStorage.setItem("user",baseString)

                //remmeberCheck
                if(remember)
                {
                    localStorage.setItem("user",baseString)
                }

                //redirectCheck
                setLoginStatu(true)
            }
        })
    }


function changeRemmeber(){
    setRemember(!remember)
}

    return (
        <Container>
           {loginStatu && <Redirect to="/dashboard"></Redirect>}
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <h1>User Login</h1>
                    <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(evt)=>setMail(evt.target.value)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(evt)=>setPass(evt.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check onClick={changeRemmeber} type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={fncSend}>
                            Submit
  </Button>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}

export default Login