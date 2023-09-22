import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import { DatePicker } from '@mui/lab';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const SearchBarAi = () => {
  const [days, setDays] = useState(7);
  const [adults, setAdults] = useState(1);
  const [countries, setCountries] = useState([]);
  const [dates, setDates] = useState([null, null]);
  const [footprint, setFootprint] = useState(0);

  const handleDaysChange = (value) => {
    setDays(value);
  };

  const handleAdultsChange = (value) => {
    setAdults(value);
  };


  const handleDatesChange = (value) => {
    setDates(value);
  };

  const handleFootprintChange = (event, value) => {
    setFootprint(value);
  };

  const handleSubmit = () => {
    // Handle search logic with the selected values
    console.log({
      days,
      adults,
      countries,
      dates,
      footprint,
    });
  };

  const handleAddCountry = () => {
    // Create a shallow copy of the countries array and add an empty object for a new country
    setCountries([...countries, { country: '', checkin: null, checkout: null }]);
  };

  const handleCountryChange = (index, field, value) => {
    // Update the specific field for the country at the specified index
    const updatedCountries = [...countries];
    updatedCountries[index][field] = value;
    setCountries(updatedCountries);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <TextField
          label="Number of Days"
          type="number"
          value={days}
          onChange={(e) => handleDaysChange(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="Number of Adults"
          type="number"
          value={adults}
          onChange={(e) => handleAdultsChange(e.target.value)}
          fullWidth
        />
      </Grid>

      <Grid item xs={2}>
        {countries.map((country, index) => (
          <div key={index}>
            <TextField
              label={`Country ${index + 1}`}
              value={country.country}
              onChange={(e) => handleCountryChange(index, 'country', e.target.value)}
              fullWidth
            />
            <div>
              <DatePicker
                label="Check-in Date"
                value={country.checkin}
                onChange={(newDate) => handleCountryChange(index, 'checkin', newDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div>
              <DatePicker
                label="Check-out Date"
                value={country.checkout}
                onChange={(newDate) => handleCountryChange(index, 'checkout', newDate)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        ))}
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="secondary" onClick={handleAddCountry}>
          Add Country
        </Button>
      </Grid>

      <Grid item xs={2}>
        <DatePicker
          label="Dates"
          value={dates}
          onChange={(newValue) => handleDatesChange(newValue)}
          renderInput={(params) => <TextField {...params} />}
          fullWidth
        />
      </Grid>

      <Grid item xs={2}>
        <Typography gutterBottom>Footprint</Typography>
        <Slider
          value={footprint}
          onChange={handleFootprintChange}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={10}
          fullWidth
        />
      </Grid>

      <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBarAi;
