import React from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Button from '@mui/material/Button';
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  const handleSubmitCustom = (e) => {
    e.preventDefault();

    console.log(e)
  }

  return (

    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Title"
        />
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Appointment With"
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />

      {/* //   <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     <Stack spacing={3}>
    //       <TextField
    //         id="filled-basic"
    //         label="Title"
    //         value={title}
    //         variant="filled"
    //         required
    //         onChange={(e) => setTitle(e.target.value)} />
    //       <label>
    //         <ContactPicker
    //           name="Contact"
    //           value={contact}
    //           contacts={getContactNames()}
    //           onChange={(e) => setContact(e.target.value)}
    //           placeholder="Appointment With"
    //         />
    //       </label>
    //       <MobileDatePicker
    //         label="Date"
    //         inputFormat="dd/MM/yyyy"
    //         value={date}
    //         onChange={(newValue) => {
    //           setDate(newValue);
    //           console.log(date);
    //         }}
    //         renderInput={(params) => <TextField style={{ width: 190 }} {...params} />}
    //       />
    //       <TimePicker
    //         label="Time"
    //         ampm  
    //         value={time}
    //         onChange={(value) => {
    //           setTime(value)
    //         }}
    //         renderInput={(params) => <TextField style={{ width: 190 }} {...params} />}
    //       />
    //     </Stack>
    //   </LocalizationProvider>
    //   <Button type="submit" variant="contained">Submit</Button> */}
    </form>
  );
};
