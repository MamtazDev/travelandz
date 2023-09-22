import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useCallback, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import { DatePicker } from '@mui/lab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

// utils
import { fData } from 'src/utils/format-number';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// assets
import { countries } from 'src/assets/data';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFUploadAvatar,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { useFieldArray } from 'react-hook-form';
import { useCompany } from "src/components/session";


// ----------------------------------------------------------------------

export default function ProjectNewEditForm({ currentProject }) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const priorityOptions = ['High', 'Low']
  const phaseOptions = ['needs', 'proposal', 'pre-booking', 'booking', 'pre-Travel', 'in-travel', 'post-travel']
  const { userId, companyId } = useCompany(); 
 

  const NewProjectSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    customer: Yup.string().required('Email is required').email('Email must be a valid email address'),
   // phoneNumber: Yup.string().required('Phone number is required'),
   // address: Yup.string(),
    country: Yup.string().required('Country is required'),
    //company: Yup.string().required('Company is required'),
  //  state: Yup.string().required('State is required'),
   // city: Yup.string().required('City is required'),
    priority: Yup.string().required('Priority is required'),
   // avatarUrl: Yup.mixed().nullable().required('Avatar is required'),
    // not required
   // status: Yup.string(),
   // customer: Yup.string(),
    description: Yup.string(),
    title: Yup.string(),
    isVerified: Yup.boolean(),
    cities: Yup.array(),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProject?.name || '',
      city: currentProject?.city || [],
      priority: currentProject?.priority || 'High',
      phase: currentProject?.phase || 'Phase 1',
      responsible: userId,
      company: companyId,
      customer: currentProject?.email || '',
      state: currentProject?.state || '',
      status: currentProject?.status || '',
      country: currentProject?.country || '',
      avatarUrl: currentProject?.avatarUrl || null,
      isVerified: currentProject?.isVerified || true,
      description: currentProject?.description || '',
      title: currentProject?.title || '',
      cities: currentProject?.cities || '',
    }),
    [currentProject]
  );

  const methods = useForm({
    resolver: yupResolver(NewProjectSchema),
    defaultValues,
  });

  const { reset, watch, control, setValue, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    
    control,
    name: 'cities', // Set the name to "cities" which is an array
    
  });

  const values = watch();



  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = handleSubmit(async (data) => {
    try {
  
      // Make sure to set isSubmitting to true to display the loading state in the button
      setIsSubmitting(true);
    
      console.log("sending the following data to the backend", data)
      // Call your backend API to create the project
      const response = await axios.post(`${process.env.REACT_APP_HOST_API}/projects/new`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Reset the form and show a success message
      reset();
      enqueueSnackbar(currentProject ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.project.list);
      console.info('DATA', response.data);
    } catch (error) {
      // Handle the error and display an error message
      console.error(error);
      enqueueSnackbar('Failed to create/update project', { variant: 'error' });
    } finally {
      // Make sure to set isSubmitting to false after the request is complete
      setIsSubmitting(false);
    }
  });
  

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            {currentProject && (
              <Label
                color={
                  (values.status === 'active' && 'success') ||
                  (values.status === 'banned' && 'error') ||
                  'warning'
                }
                sx={{ position: 'absolute', top: 24, right: 24 }}
              >
                {values.status}
              </Label>
            )}

            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="avatarUrl"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 3,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.disabled',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            {currentProject && (
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        checked={field.value !== 'active'}
                        onChange={(event) =>
                          field.onChange(event.target.checked ? 'banned' : 'active')
                        }
                      />
                    )}
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Banned
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Apply disable account
                    </Typography>
                  </>
                }
                sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
              />
            )}

            <RHFSwitch
              name="isVerified"
              labelPlacement="start"
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Email Verified
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Disabling this will automatically send the project a verification email
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />

            {currentProject && (
              <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                <Button variant="soft" color="error">
                  Delete Project
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>

        <Grid xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
             
              <RHFTextField name="title" label="Title" />
           
              <RHFTextField name="description" label="Description" />
              <RHFTextField name="name" label="Customer Name" />
              <RHFTextField name="customer" label="Customer Email" />
              <RHFAutocomplete
  name="priority"
  label="Priority"
  options={priorityOptions.map((priority) => priority)}
  getOptionLabel={(option) => option}
  isOptionEqualToValue={(option, value) => option === value}
  renderOption={(props, option) => {
    const selectedPriority = priorityOptions.find(
      (priority) => priority === option
    );
    if (!selectedPriority) {
      return null;
    }

    return (
      <li {...props} key={selectedPriority}>
        {selectedPriority}
      </li>
    );
  }}
  onChange={(event, newValue) => {
    const selectedPriority = priorityOptions.find(
      (priority) => priority === newValue
    );
    if (selectedPriority) {
      // Update the form values with the selected project's title and _id
      setValue('priority', selectedPriority);
      
    } else {
      // Handle the case where no project is selected
      setValue('priority', '');
   
    }
  }}
/>
<RHFAutocomplete
  name="phase"
  label="Phase"
  options={phaseOptions.map((phase) => phase)}
  getOptionLabel={(option) => option}
  isOptionEqualToValue={(option, value) => option === value}
  renderOption={(props, option) => {
    const selectedPhase = phaseOptions.find(
      (phase) => phase === option
    );
    if (!selectedPhase) {
      return null;
    }

    return (
      <li {...props} key={selectedPhase}>
        {selectedPhase}
      </li>
    );
  }}
  onChange={(event, newValue) => {
    const selectedPhase = phaseOptions.find(
      (phase) => phase === newValue
    );
    if (selectedPhase) {
      // Update the form values with the selected project's title and _id
      setValue('phase', selectedPhase);
      
    } else {
      // Handle the case where no project is selected
      setValue('phase', '');
   
    }
  }}
/>
              <RHFTextField name="size" label="Size Group" />
              <RHFTextField name="adults" label="Adults" />
              <RHFTextField name="kids" label="Kids" />
              <RHFTextField
                  name="startDate"
                  label="Start Date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      fullWidth
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />

                <RHFTextField
                  name="endDate"
                  label="End Date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      fullWidth
                      renderInput={(params) => <TextField {...params} />}
                    />
                  )}
                />
               <RHFAutocomplete
                name="country"
                label="Country"
                options={countries.map((country) => country.label)}
                getOptionLabel={(option) => option}
                isOptionEqualToValue={(option, value) => option === value}
                renderOption={(props, option) => {
                  const { code, label, phone } = countries.filter(
                    (country) => country.label === option
                  )[0];

                  if (!label) {
                    return null;
                  }

                  return (
                    <li {...props} key={label}>
                      <Iconify
                        key={label}
                        icon={`circle-flags:${code.toLowerCase()}`}
                        width={28}
                        sx={{ mr: 1 }}
                      />
                      {label} ({code}) +{phone}
                    </li>
                  );
                }}
              />

{fields.map((field, index) => (
  <React.Fragment key={field.id}>
    <Controller
      name={`cities[${index}]`} // Set the name to "cities[index]"
      control={control}
      render={({ field }) => (
        <RHFTextField
          {...field}
          label={`City ${index + 1}`} // Use index to display the city number
        />
      )}
    />
    <div>
      <Button variant="text" onClick={() => remove(index)}>Remove</Button> {/* Add a remove button */}
    </div>
  </React.Fragment>
))}


  <Button variant="outlined" onClick={() => append({})}>Add City</Button> {/* Add a button to add a new city */}
             

             
              

            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!currentProject ? 'Create Project' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

ProjectNewEditForm.propTypes = {
  currentProject: PropTypes.object,
};
