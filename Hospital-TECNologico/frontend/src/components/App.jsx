import { useState } from 'react'
import  {Route, useLocation}  from 'wouter'
import SingUp from './SingUp'
import LogIn from './LogIn'
import ProfilePatient from './ProfilePatient'
import ClinicRecord from './ClinicRecord'
import Reservations from './Reservations'
import ProfileDoctor from './ProfileDoctor'
import CreateUser from './CreateUser'
import Welcome from './Welcome'
import AddClinicRecord from './AddClinicRecord'

function App() {

  return (
    <>
      <Route path="/" component = {Welcome} />
      <Route path="/singup" component = {SingUp}/>
      <Route path="/login" component = {LogIn} />
      <Route path="/patient/:id">{(params) => <ProfilePatient id={params.id}/>}</Route>
      <Route path="/clinic-record/:id">{(params) => <ClinicRecord id={params.id}/>}</Route>
      <Route path="/reservations/:id">{(params) => <Reservations id={params.id}/>}</Route>
      <Route path="/doctor/:id">{(params) => <ProfileDoctor id={params.id}/>}</Route>
      <Route path="/create-user" component = {CreateUser} />
      <Route path="/add-clinic-record" component = {AddClinicRecord} />
    </>
  )
}

export default App
