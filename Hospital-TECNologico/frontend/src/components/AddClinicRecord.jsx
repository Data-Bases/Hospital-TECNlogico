import { useState } from "react"
import { Container, Button } from "react-bootstrap"
import Header from "./Header"

function AddClinicRecord(){

    const [userData, setUserData] = useState(
        {
            "CEDULA": "",
            "PATOLOGIAS": "",
            "TRATAMIENTOS": ""
        }
    )
    return(
        <Container className="d-flex p-5 flex-column align-items-center w-100 h-100 justify-items-center">
            <Header name={"Fill the user Info"} id={0} rol="2" radio="1"/>
            <Container className='secondary p-3 w-50 d-flex flex-column align-items-center h-50 rounded'>
                <form className="d-flex p-1 flex-column align-items-center">
                    {
                        Object.keys(userData).map((key) => 
                        <label key={key} className="m-2 text-primary">
                        {key}
                            <input type={key=="FECHA DE NACIMIENTO"? "date" : "text"} className="ms-4" name={key} onChange={(event) => {
                                userData[key] = event.target.value
                                setUserData(userData)
                            }}/>
                        </label>
                        )
                    }
                    <Button variant="primary" className='m-2' onClick={() => {
                        alert("usuario creado")
                        }}> Actualizar Datos </Button>
                    <Button variant="primary" className="m-2" onClick={() => {setLocation("/view-all-patients")}}></Button>
                </form>
            </Container>
        </Container>
    )
}

export default AddClinicRecord