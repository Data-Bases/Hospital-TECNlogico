import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useLocation } from "wouter"


function LogIn(){
    const [location, setLocation] = useLocation()
    const [userID, setUserId] = useState(0)
    return(
        <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
        <h1>HOSPITAL TECNOLÓGICO</h1>
        <Container className='secondary p-3 w-50 d-flex flex-column align-items-center h-50 rounded'>
            <form className="d-flex p-1 flex-column align-items-center">
                <label className="m-2 text-primary">
                    CÉDULA:  
                    <input className="ms-4" type="text" name="id" onChange={(event) => {setUserId(event.target.value)}}/>
                </label>
                <label className="m-2 text-primary">
                    CONTRASEÑA:  
                    <input className="ms-4" type="text" name="password"/>
                </label>
                <Button variant="primary" className="m-2" onClick={() => setLocation("/patient/"+userID)}> Log In </Button>
            </form>
        </Container>
        </Container>
    )
}

export default LogIn