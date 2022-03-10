import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = ({addAppointment, appointments, contacts}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : '');


  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time)
    setTitle('');
    setDate('');
    setTime('');
    setContact('');
  };
  
  // Add a new appointment on form submission

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          date={date} 
          setDate={setDate}
          time={time}
          setTime={setTime} 
          contact={contact}
          setContact={setContact}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
