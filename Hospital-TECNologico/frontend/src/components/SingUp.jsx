
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useLocation from 'wouter/use-location';
import axios from 'axios';

const baseURL = "https://localhost:44382/hospital/tecnoligco/Patient/PostPatient";


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
        <Container>
            <form>
                {
                    Object.keys(userData).map((key) => 
                    <label key={key}>
                    {key}
                        <input type={key=="FECHA DE NACIMIENTO"? "date" : "text"} name={key} onChange={(event) => {
                            userData[key] = event.target.value
                            setUserData(userData)
                        }}/>
                    </label>
                    )
                }
                <Button variant="primary" onClick={() => {
                    axios({
                        method: "POST",
                        url: baseURL, 
                        headers: {
                            accept: 'text/plain',
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
            </form>
        </Container>
      );

}

export default SingUp