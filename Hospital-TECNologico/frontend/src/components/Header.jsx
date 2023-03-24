import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation } from "wouter";


function Header({name, id, rol}) {
    const [radioValue, setRadioValue] = useState('1');
    const [location, setLocation] = useLocation();
    const  vistas = [
        { name: 'Reservaciones', value: '1', url: "/reservations/" },
        { name: 'Historial Clínico', value: '2', url:"/clinic-record/"},
        { name: 'Perfil', value: '3', url: "/patient/"},
      ];
    return(
        <Container>
            <ButtonGroup>
                {vistas.map((vista, idx) => (
                <ToggleButton
                    key={idx}
                    id={`vista-${idx}`}
                    type="radio"
                    variant="primary"
                    name="vista"
                    value={vista.value}
                    checked={radioValue === vista.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    <Link href={vista.url + id} style={{color: "black"}}>
                    {vista.name}
                    </Link>
                </ToggleButton>
                ))}
            </ButtonGroup>
            <img></img>
            <h2>{name}</h2>
        </Container>
    )
}

export default Header