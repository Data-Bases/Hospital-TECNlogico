import { Container } from "react-bootstrap"
import Header from "./Header"
import { useState } from "react"
import axios from "axios"

const baseURL = "http://localhost:9095/hospital/tecnoligco/Patient/GetPatientById/"

function ClinicRecord({id}) {
    // const [userData, setUserData] = useState(
    //     {
    //         "NOMBRE": "",
    //         "APELLIDO": "",
    //         "CEDULA": "",
    //         "TELEFONO": "",
    //         "DIRECCIÓN": "",
    //         "FECHA DE NACIMIENTO": "",
    //         "PATOLOGIAS": "",
    //         "TRATAMIENTOS": "",
    //     }
    // )
    // const [reload, setReload] = useState(false)

    // axios.get(baseURL + id).then((response) => {
    //     console.log(response.data.name)
    //     userData.NOMBRE = response.data.name
    //     setUserData(userData)
    //     setReload(true)
    // }).catch((e) => {
    //     alert("El usuario no existe")
    // })

    // User data for tests
    const userData = {
        "NOMBRE": "Pi",
        "APELLIDO": "Chudo",
        "CEDULA": "31415926",
        "TELEFONO": "53589793",
        "DIRECCIÓN": "la rotonda",
        "FECHA DE NACIMIENTO": "3141-3-14",
        "PATOLOGIAS": "irracional",
        "TRATAMIENTOS": "radio",
    }

    return(
        <Container className="d-flex p-5 flex-column align-items-start w-100 h-100 justify-items-start background rounded-5 rounded-top-0">
            <Header name={userData.NOMBRE} id={id} rol="1" radio="2"/>
            <p className="ms-5 text-black fs-4">
                {userData.APELLIDO} <br/>
                <hr/>
                PATOLOGIAS: {userData.PATOLOGIAS} <br/>
                TRATAMIENTOS: {userData.TRATAMIENTOS} <br/>
            </p>
        </Container>
    )
}

export default ClinicRecord