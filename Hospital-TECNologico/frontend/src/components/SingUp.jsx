
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useLocation from 'wouter/use-location';
import axios from 'axios';
import { Link } from 'wouter';

const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/PostPatient";


function SingUp(){
    const [location, setLocation] = useLocation()
    const [userData, setUserData] = useState(
        {
            "NOMBRE": "",
            "APELLIDO": "",
            "CEDULA": "",
            "TELEFONO": "",
            "DIRECCIÓN": "",
            "FECHA DE NACIMIENTO": "",
            "PATOLOGIAS": "",
            "TRATAMIENTOS": "",
        }
    )

    return (
        <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
            <h1>HOSPITAL TECNOLÓGICO</h1>
            <Container className='secondary p-3 w-50 d-flex flex-column align-items-center h-50 rounded'>
            <form className="d-flex p-1 flex-column align-items-center">
                {
                    Object.keys(userData).map((key) => 
                    <label key={key} className="m-2 text-primary">
                    {key}
                        <input className="ms-4" type={key=="FECHA DE NACIMIENTO"? "date" : "text"} name={key} onChange={(event) => {
                            userData[key] = event.target.value
                            setUserData(userData)
                        }}/>
                    </label>
                    )
                }
                <Button variant="primary" className='m-2' onClick={() => {
                    axios({
                        method: "POST",
                        url: baseURL, 
                        headers: {
                            'accept': 'text/plain',
                            'Content-Type': 'application/json'
                        },
                        data: {
                        "name": userData.NOMBRE,
                        "id": userData.CEDULA,
                        "phoneNumbers": [
                          userData.TELEFONO
                        ],
                        "dateOfBirth": userData['FECHA DE NACIMIENTO'],
                        "pathologies": [
                          {
                            "name": userData.PATOLOGIAS,
                            "treatment": userData.TRATAMIENTOS
                          }
                        ]
                      }})
                    .then((response) => {
                      alert("Registro exitoso")
                      setLocation("/patient/"+userData.CEDULA)
                    }).catch(error => {
                        alert(error)
                    });
                    }}> Registrarse </Button>

                    <Button variant='primary' className='text-black text-decoration-none m-2'><Link href='/'> Regresar </Link></Button>
            </form>
            </Container>
        </Container>
      );

}

export default SingUp