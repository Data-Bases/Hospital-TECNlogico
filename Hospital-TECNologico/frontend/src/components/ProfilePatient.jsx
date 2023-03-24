import { Container } from "react-bootstrap"
import { useState} from "react"
import Header from "./Header"
import axios from "axios"
const baseURL = "https://localhost:44382/hospital/tecnoligco/Patient/GetPatientById/"

function ProfilePatient({id}) {
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
    // HACER GET
    axios.get(baseURL + id).then((response) => {
        console.log(response.data.name)
        userData.NOMBRE = response.data.name
        setUserData(userData)
        setReload(true)
    })



    return (
        <Container>
            <Header name={userData.NOMBRE} id={id} rol="1" />
        </Container>
    )

}

export default ProfilePatient