import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
    display = "flex"
    justify-content="center"
      alignItems="center"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      backgroundColor= "#101522"
    >
      <TextField label=" First Name" color="secondary" focused />
      <TextField label=" Last Name" color="secondary" focused />
      <TextField label=" Email Address" color="secondary" focused />
      <TextField label="Phone" color="secondary" focused />
      <TextField label="Custom Order Request" color="secondary" focused />
    </Box>
  );
}