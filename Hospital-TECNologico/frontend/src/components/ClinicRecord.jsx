import { Container } from "react-bootstrap"
import Header from "./Header"
import { useState } from "react"
import axios from "axios"

const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/GetPatientById/"

function ClinicRecord({id}) {
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
    const [reload, setReload] = useState(false)

    axios.get(baseURL + id).then((response) => {
        console.log(response.data.name)
        userData.NOMBRE = response.data.name
        setUserData(userData)
        setReload(true)
    }).catch((e) => {
        alert("El usuario no existe")
    })


    return(
        <Container>
            <Header name={userData.NOMBRE} id={id}/>
        </Container>
    )
}

export default ClinicRecord