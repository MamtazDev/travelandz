import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { paths } from 'src/routes/paths';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Image from 'src/components/image';
import { varTranHover } from 'src/components/animate';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import TourDetailsHero from '../tour-details-hero';


import img1 from "./banner.jpg";
import loadingGif from "./ai-icon.gif";
import { bgGradient } from 'src/theme/css';
import { alpha, useTheme } from '@mui/material/styles';


export default function TourAIDisplayView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const [cities, setCities] = useState([
    'City 1',
    'City 2',
    'City 3',
    // Add more cities as needed
  ]);
 


 
  

  function SearchBar() {
    const [city, setCity] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [adults, setNumAdults] = useState(1);
    const [kids, setNumKids] = useState(0);

    const data = {
      city,
      checkin,
      checkout,
      adults,
      kids,
    };

    const [loading, setLoading] = useState(false); // Add loading state
    const [dialogOpen, setDialogOpen] = useState(false); // Add dialog state
  
    const handleSearch = () => {
      setLoading(true); // Start loading
      setDialogOpen(true); // Open the dialog

     // Perform search logic here using the state values
      console.log('Search:', {
        city,
        checkin,
        checkout,
        adults,
        kids
      });
      axios
      .post(`${process.env.REACT_APP_HOST_API}/createItinerary`, data)
      .then(response => {
        console.log('Trip created successfully:', response.data);
        setLoading(false); // Stop loading
        setDialogOpen(false); // Close the dialog
        console.log(response.data)
        window.location.href = paths.dashboard.tour.demo.details; 
        // Handle any further logic or updates here
      })
      .catch(error => {
        console.error('Error creating trip:', error);
        setLoading(false); // Stop loading
      
        // Handle errors here
      });
    };

  

    return (
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={1}
        sx={{
          mb: { xs: 3, md: 5 },
          position: 'relative', // Position the image container
        }}
      >
        <m.div
          key={img1}
          whileHover="hover"
          variants={{
            hover: { opacity: 0.8 },
          }}
          transition={varTranHover()}
          sx={{
            width: '100%', // Set the width to 100% of the container
          }}
        >
          <Image
            alt={img1}
            src={img1}
            ratio="1/1"
            sx={{
              width: '100%', // Make the image width 100%
              height: 'auto', // Maintain aspect ratio
              borderRadius: 2,
              cursor: 'pointer',
            }}
          />
        </m.div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Arrange items in a column
            gap: 2, // Gap between items
          }}
        >
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            label="Check-In"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Check-Out"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Adults"
            type="number"
            value={adults}
            onChange={(e) => setNumAdults(e.target.value)}
            inputProps={{
              min: 1,
            }}
          />
          <TextField
            label="Kids"
            type="number"
            value={kids}
            onChange={(e) => setNumKids(e.target.value)}
            inputProps={{
              min: 0, 
            }}
          />
          <Button variant="contained" onClick={handleSearch}>
            Generate Itinerary using AI
          </Button>
        </Box>
        <Dialog open={dialogOpen}>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {loading && <img src={loadingGif} alt="Loading" style={{ width: 100, height: 100 }} />}
            {loading ? <p>Waiting for file creation...</p> : null}
          </Box>
        </DialogContent>

        </Dialog>
      </Box>
      
    );
  }

  
  

  return (

    <Box
    sx={{
      height: '100%', // Set height to 100% to cover the entire parent
      overflow: 'hidden',
      position: 'relative', // Position the box
    }}
  >
          <TourDetailsHero title='Tailor Made Inspiring Spain' description="Escape the city and ifnd yourself in the middle of nowhere in Spain" coverUrl={img1} />

    {/* Background gradient */}
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        ...bgGradient({
          startColor: `${alpha(theme.palette.grey[900], 0.64)} 0%`,
          endColor: `${alpha(theme.palette.grey[900], 0.64)} 100%`,
        }),
      }}
    />
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>

      <CustomBreadcrumbs
        heading="Create a new tour"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Tour',
            href: paths.dashboard.tour.root,
          },
          { name: 'New tour' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <SearchBar />
    </Container>
  </Box>
  );
}
