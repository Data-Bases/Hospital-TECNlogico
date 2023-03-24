import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useLocation } from 'wouter'


function Welcome() {
    const [location, setLocation] = useLocation()

    return (
    <div>
        <h1>HOSPITAL TECNOLÓGICO</h1>
        <Container className='secondary p-3'>
                <Button variant='primary' className='me-4' onClick={() => setLocation("/login")}>Iniciar Sesión</Button>
                <Button variant='primary' onClick={() => setLocation("/singup")}>Registrarse</Button>
        </Container>
    </div>

    )
}

export default Welcome