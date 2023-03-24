import { useState } from "react"
import { Container, Button } from "react-bootstrap"
function CreateUser (){
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
    return(
        <Container>
        <form>
            {
                Object.keys(userData).map((key) => 
                <label key={key}>
                {key}
                    <input type="text" name={key} onChange={(event) => {
                        userData[key] = event.target.value
                        setUserData(userData)
                    }}/>
                </label>
                )
            }
            <Button variant="primary" onClick={() => {
                alert("usuario creado")
                }}> Crear Usuario </Button>
        </form>
        </Container>
    )
}
export default CreateUser