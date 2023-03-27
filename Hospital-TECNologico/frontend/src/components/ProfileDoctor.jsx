import { Container, Button } from "react-bootstrap"
import Header from "./Header"
import { Link } from "wouter"

function ProfileDoctor({id}) {

    // User data for tests
    const userData = {
        "NOMBRE": "Pi",
        "APELLIDO": "Doc",
        "CEDULA": "3145926",
        "TELEFONO": "53589793",
        "DIRECCIÓN": "la rotonda",
        "FECHA DE NACIMIENTO": "314-3-14"
    }

    return (
        <Container className="d-flex p-5 flex-column align-items-start w-100 h-100 justify-items-start background rounded-5 rounded-top-0">
            <Header name={"Dr." + userData.NOMBRE} id={id} rol="2" radio="3"/>
            <p className="ms-5 text-black fs-4">
                {userData.APELLIDO} <br/>
                <hr/>
                CEDULA: {userData.CEDULA} <br/>
                TELEFONO: {userData.TELEFONO} <br/>
                DIRECCIÓN: {userData.DIRECCIÓN} <br/>
                FECHA DE NACIMIENTO: {userData["FECHA DE NACIMIENTO"]}
            </p>
            <Button variant='secondary' className='text-white text-decoration-none m-2'><Link href='/'> Regresar </Link></Button>
        </Container>
    )
}

export default ProfileDoctor