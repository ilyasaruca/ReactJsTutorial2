import { Base64 } from 'js-base64'
import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

function NavMenu() {

    const [loginStatus, setLoginStatus] = useState(false)
    const [nameSurname, setNameSurname] = useState("")



    useEffect(() => {
        //localStorageCheck
        const localUser = localStorage.getItem("user")
        if(localUser != null){
            sessionStorage.setItem("user",localUser)
        }

        //sessionCheck
        const sessionUSer = sessionStorage.getItem("user")
        if(sessionUSer == null){
            setLoginStatus(true)
        }
        else{
            //server services check
            const cString = Base64.decode(sessionUSer)
            const cJson = JSON.parse(cString)
            const n = cJson.userName+ ' '+ cJson.userSurname
            setNameSurname(n)
        }
    }, [])


    //logout function
    function fncLogout() {

        const answer = window.confirm("Are you sure?")

        if(answer){
            sessionStorage.removeItem("user")
            sessionStorage.clear()
    
            localStorage.clear()
            setLoginStatus(true)
        }
        
    }

    return (
        <Navbar bg="light" expand="lg">
            {loginStatus && <Redirect to="/"></Redirect>}
            <Navbar.Brand href="/dashboard">Admin Control</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                    <Nav.Link href="/settings">Settings</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={fncLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>{nameSurname}</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu
