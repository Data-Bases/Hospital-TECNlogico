import { Container, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import { Link, useLocation } from "wouter";


function Header({name, id, rol, radio}) {
    const [radioValue, setRadioValue] = useState(radio);
    const [location, setLocation] = useLocation();
    const  vistas = [
        { name: 'Reservaciones', value: '1', url: "/reservations/" },
        { name: 'Historial Clínico', value: '2', url:"/clinic-record/"},
        { name: 'Perfil', value: '3', url: "/patient/"},
      ];
    return(
        <Container className="d-flex px-5 py-0 flex-column align-items-center w-100 h-100 justify-items-center">
            <ButtonGroup className="w-100 d-flex flex-direction-row">
                {vistas.map((vista, idx) => (
                <ToggleButton
                    key={idx}
                    id={`vista-${idx}`}
                    type="radio"
                    variant="secondary"
                    className="text-decoration-none w-25"
                    name="vista"
                    value={vista.value}
                    checked={radioValue === vista.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    <Link href={vista.url + id} style={{color: "black"}} className="text-decoration-none text-white">
                    {vista.name}
                    </Link>
                </ToggleButton>
                ))}
            </ButtonGroup>
            <h2 className="align-self-start">{name}</h2>
        </Container>
    )
}

export default Header