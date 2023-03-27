import { Container, Button } from "react-bootstrap"
import { useState} from "react"
import Header from "./Header"
import axios from "axios"
import { Link } from "wouter"
const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/GetPatientById/"


function ProfilePatient({id}) {
    const [userData, setUserData] = useState(
        {
            "NOMBRE": "",
            "CEDULA": "",
            "TELEFONO": "",
            "FECHA DE NACIMIENTO": "",
            "PATOLOGIAS": "",
            "TRATAMIENTOS": "",
        }
    )
    const [reload, setReload] = useState(false)
    // HACER GET
    axios.get(baseURL + id).then((response) => {
        console.log(response.data)
        userData.NOMBRE = response.data.name
        userData.CEDULA = response.data.id
        userData.TELEFONO = response.data.phoneNumbers.map((tel) => tel)
        userData.PATOLOGIAS = response.data.pathologies.map(
            (pat) => pat.name
        )
        userData.TRATAMIENTOS = response.data.pathologies.map(
            (pat) => pat.treatment
        )
        userData["FECHA DE NACIMIENTO"] = response.data.dateOfBirth
        setUserData(userData)
        setReload(true)
    }).catch((e) => {
        alert("El usuario no existe")
    })



    return (
        <Container className="d-flex p-5 flex-column align-items-start w-100 h-100 justify-items-start background rounded-5 rounded-top-0">
            <Header name={userData.NOMBRE} id={id} rol="1" radio="3"/>
            <p className="ms-5 text-black fs-4">
                <hr/>
                CEDULA: {userData.CEDULA} <br/>
                TELEFONO: {userData.TELEFONO} <br/>
                FECHA DE NACIMIENTO: {userData["FECHA DE NACIMIENTO"]}
            </p>
            <Button variant='secondary' className='text-white text-decoration-none m-2'><Link href='/'> Regresar </Link></Button>
        </Container>
    )

}

export default ProfilePatient