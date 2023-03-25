import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useLocation } from 'wouter'


function Welcome() {
    const [location, setLocation] = useLocation()

    return (
    <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
        <h1>HOSPITAL TECNOLÓGICO</h1>
        <Container className='secondary p-3 w-50 d-flex flex-column align-items-center h-50 rounded'>
                <Button variant='primary' className='m-4' onClick={() => setLocation("/login")}>Iniciar Sesión</Button>
                <Button variant='primary' className="m-4" onClick={() => setLocation("/singup")}>Registrarse</Button>
        </Container>
    </Container>

    )
}

export default Welcome