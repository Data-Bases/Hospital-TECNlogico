

function Patient(){
    return(
        <>
            <Route path="/user/patient/:id">{(params) => <ProfilePatient id={params.id}/>}</Route>
            <Route path="/user/clinic-record/:id">{(params) => <ClinicRecord id={params.id}/>}</Route>
            <Route path="/user/reservations/:id">{(params) => <Reservations id={params.id}/>}</Route>
        </>
    )
}

export default Patient