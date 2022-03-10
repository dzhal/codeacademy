import React, { useState } from "react";
import { Navigate, Route, Routes, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContact] = useState([]);
  const addContact = (name, phone, email) => {
    setContact([
      ...contacts, 
      {
        name: name,
        phone: phone,
        email: email
      }
    ]);
  };
  const [appointments, setAppointments] = useState([]);
  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ])
  }

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Navigate to={ROUTES.CONTACTS} />} />
          <Route 
            path={ROUTES.CONTACTS} 
            element={<ContactsPage 
              addContact={addContact}
              contacts={contacts} />} />
          <Route 
            path={ROUTES.APPOINTMENTS} 
            element={<AppointmentsPage 
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
