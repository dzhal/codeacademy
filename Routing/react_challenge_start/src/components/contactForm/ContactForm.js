import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const [errors, setErrors] = useState({});


  const handleChangePhone = (e) => {
    setErrors({ phone: '' });
    setPhone(e.target.value);
    let isValid = /^7\d*$/.test(e.target.value);

    if (!isValid) {
      setErrors({ phone: 'Phone sholud be 79998887766' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        label="Name"
        value={name}
        variant="filled"
        required
        onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <TextField
        id="filled-basic"
        label="Phone"
        value={phone}
        inputProps={{ maxLength: 11 }}
        variant="filled"
        required
        onChange={handleChangePhone}
        error={Boolean(errors?.phone)}
        helperText={errors?.phone} />
      <br/>
      <br />
      <TextField
        id="filled-basic"
        label="Email"
        value={email}
        variant="filled"
        required
        onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <br />
      <Button type="submit" variant="contained">Contained</Button>
    </form>
  );
};
