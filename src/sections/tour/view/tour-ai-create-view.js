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
import { withRouter } from 'react-router-dom';
import SearchBarAi from 'src/components/searchbar-ai';

import img1 from "./banner.jpg";
import loadingGif from "./ai-icon.gif";

export default function TourAICreateView({ id }) {
  const settings = useSettingsContext();

  const [cities, setCities] = useState([
    'City 1',
    'City 2',
    'City 3',
    // Add more cities as needed
  ]);
 


 
  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new tour with AI"
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
      <SearchBarAi />
    </Container>
  );
}
