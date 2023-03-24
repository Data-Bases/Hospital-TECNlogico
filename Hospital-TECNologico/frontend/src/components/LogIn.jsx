import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useLocation } from "wouter"


function LogIn(){
    const [location, setLocation] = useLocation()
    const [userID, setUserId] = useState(0)
    return(
        <>
        <h1>HOSPITAL TECNOLÓGICO</h1>
        <Container>
            <form>
                <label>
                    CÉDULA
                    <input type="text" name="id" onChange={(event) => {setUserId(event.target.value)}}/>
                </label>
                <label>
                    CONTRASEÑA
                    <input type="text" name="password"/>
                </label>
                <Button variant="primary" onClick={() => setLocation("/patient/"+userID)}> Log In </Button>
            </form>
        </Container>
        </>
    )
}

export default LogIn