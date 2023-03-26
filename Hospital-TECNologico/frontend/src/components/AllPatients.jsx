import { Container, Button } from "react-bootstrap"
import Header from "./Header"
import { useState } from "react"
import axios from "axios"
import { Link } from "wouter"


const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/GetAllPatients"

function AllPatients(){

    const [userData, setUserData] = useState(
        [{
            "NOMBRE": "",
            "APELLIDO": "",
            "CEDULA": "",
            "TELEFONO": "",
            "DIRECCIÓN": "",
            "FECHA DE NACIMIENTO": "",
            "PATOLOGIAS": "",
            "TRATAMIENTOS": "",
        }]
    )
    const [reload, setReload] = useState(false)
    axios.get(baseURL).then((response) => {
        console.log(response.data[0].name)
        setUserData(userData)
        setReload(true)
    }).catch((e) => {
        alert("Error al conectar")
    })

    return(
        <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
        <Button variant='secondary' className='text-white text-decoration-none m-2'><Link href='/'> Regresar </Link></Button>
        {
            
           userData.map((pos) =>
            <Container key={pos.CEDULA} className="d-flex p-1 my-4 flex-column secondary align-items-center rounded w-50">
                {
                    Object.keys(pos).map((key) => 
                    
                        <p className="text-white" name={key}> {key+":  "+pos[key]} </p>
                    )
                }
            </Container>
           )
            
        }
    </Container>
    )
}

export default AllPatients;