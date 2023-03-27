import { Container, Button } from "react-bootstrap"
import Header from "./Header"
import { useState } from "react"
import axios from "axios"
import { Link } from "wouter"


const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/GetAllPatients"

function AllPatients(){

    const [usersData, setUsersData] = useState(
        []
    )
    
    const [reload, setReload] = useState(false)
    axios.get(baseURL).then((response) => {
        console.log(response.data[0].name)
        const result = []
        for (let i = 0; i < response.data.length; i++){
            const userData = {
                "NOMBRE": "",
                "CEDULA": "",
                "TELEFONO": "",
                "FECHA DE NACIMIENTO": "",
                "PATOLOGIAS": "",
                "TRATAMIENTOS": "",
            }
            userData.NOMBRE = response.data[i].name
            userData.CEDULA = response.data[i].id
            userData.TELEFONO = response.data[i].phoneNumbers.map((tel) => tel)
            userData.PATOLOGIAS = response.data[i].pathologies.map(
                (pat) => pat.name
            )
            userData.TRATAMIENTOS = response.data[i].pathologies.map(
                (pat) => pat.treatment
            )
            userData["FECHA DE NACIMIENTO"] = response.data[i].dateOfBirth
            result.push(userData)
        }
        setUsersData(result)
        setReload(true)
    }).catch((e) => {
        alert("Error al conectar")
    })

    return(
        <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
        <Button variant='secondary' className='text-white text-decoration-none m-2'><Link href='/add-clinic-record'> Regresar </Link></Button>
        {
            
           usersData.map((pos) =>
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