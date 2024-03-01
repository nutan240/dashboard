// import React from 'react';
import { Formik, Form, Field } from 'formik'; // Import Formik components
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React, { useState  } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import AdapterDateFns from '@mui/x-date-adapters/date-fns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TextField, Box, Typography } from '@mui/material';

const currencies = [
  {
    value: 'MOBILE',
    label: 'MOBILE',
  },
  {
    value: 'LAPTOP',
    label: 'LAPTOP',
  },
  {
    value: 'ELECTRONIC',
    label: 'ELECTRONIC',
  },
];

function Demo() {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log('Form values:', values);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date.$d);
  };

console.log(selectedDate , 'selectedDateselectedDate' )
  return (
    
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 300, mt: 3 }}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}
        </Typography>
      </Box>
    </LocalizationProvider>
    </>
  );
}

export default Demo;
