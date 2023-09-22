import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { DatePicker } from '@mui/lab';
import { useMemo } from 'react';
import { useState, useEffect } from 'react';

// @mui
import LoadingButton from '@mui/lab/LoadingButton';
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
//import { fData } from 'src/utils/format-number';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// assets
//import { countries } from 'src/assets/data';
// components
import Label from 'src/components/label';
//import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFAutocomplete,
} from 'src/components/hook-form';
import { useCompany } from "src/components/session";


// ----------------------------------------------------------------------

export default function TaskNewEditForm({ currentTask }) {

  
  const router = useRouter();
  const priorityOptions = ['High', 'Low']
  const { enqueueSnackbar } = useSnackbar();
  const { userId, companyId } = useCompany(); 
 

 


  const NewTaskSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    status: Yup.string().required('status is required'),
    starting: Yup.date().required('starting is required'),
    //user: Yup.string().required('User is required'),
    priority: Yup.string().required('Priority is required'),
   deadline: Yup.date().required('Deadline is required'),
   // project: Yup.string().required('Project is required'),
    projectName: Yup.string().required('Project Name is required'),
   // company: Yup.string(),
    
    // not required
    status: Yup.string(),
    isVerified: Yup.boolean(),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentTask?.title || '',
      description: currentTask?.description || [],
      status: currentTask?.status || 'new',
      priority: currentTask?.priority || 'High',
      user: currentTask?.user || userId,
      company: companyId,
      starting: currentTask?.starting || '',
      deadline: currentTask?.deadline || '',
      project: currentTask?.project || '',
      projectName: currentTask?.projectName || '',
    }),
    [currentTask]
  );

  const methods = useForm({
    resolver: yupResolver(NewTaskSchema),
    defaultValues,
  });

   const { reset, watch, control, setValue, handleSubmit, isSubmitting } = methods;


  const values = watch();
 

// Inside your component function
const [projectOptions, setProjectOptions] = useState([]); 
const [userOptions, setUserOptions] = useState([])


useEffect(() => {
  const fetchUserOptions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/getUsersCompany/${companyId}`);
  
      if (Array.isArray(response.data)) {
        setUserOptions(response.data); // Assuming the response data is an array of project objects
      } else {
        console.error('Response data is not an array:', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchUserOptions(); // Call the fetch function when the component mounts
}, []); // Empty dependency array ensures it runs only once when the component mounts


useEffect(() => {
  const fetchProjectOptions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/projects/company/${companyId}`);
    
      if (Array.isArray(response.data)) {
        setProjectOptions(response.data); // Assuming the response data is an array of project objects
      } else {
        console.error('Response data is not an array:', response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchProjectOptions(); // Call the fetch function when the component mounts
}, []); // Empty dependency array ensures it runs only once when the component mounts


  const onSubmit = handleSubmit(async (data) => {
    try {
           
        console.log("sending the following data to the backend", data)
        // Call your backend API to create the project
        const response = await axios.post(`${process.env.REACT_APP_HOST_API}/tasks/new`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      reset();
      enqueueSnackbar(currentTask ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.task.list);
      console.info('DATA', response.data);
    } catch (error) {
      console.error(error);
    }
  });



  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <Card sx={{ pt: 10, pb: 5, px: 3 }}>
            {currentTask && (
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

          

            {currentTask && (
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
                    Disabling this will automatically send the user a verification email
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />

            {currentTask && (
              <Stack justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
                <Button variant="soft" color="error">
                  Delete Task
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
              <RHFAutocomplete
  name="nameUser"
  label="name"
  options={userOptions.map((user) => user.name)} // Display user names
  getOptionLabel={(option) => option}
  isOptionEqualToValue={(option, value) => option === value}
  renderOption={(props, option) => {
    const selectedUser = userOptions.find(
      (user) => user.name === option
    );
    if (!selectedUser) {
      return null;
    }

    return (
      <li {...props} key={selectedUser._id}>
        {selectedUser.name}
      </li>
    );
  }}
  onChange={(event, newValue) => {
    const selectedUser = userOptions.find(
      (user) => user.name === newValue
    );
    if (selectedUser) {
      // Update the form values with the selected user's _id
      setValue('user', selectedUser._id);
    } else {
      // Handle the case where no user is selected
      setValue('user', '');
    }
  }}
/>

              <RHFTextField name="status" label="status" />
              <RHFTextField
                  name="starting"
                  label="Starting"
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

              <RHFTextField
                  name="deadline"
                  label="Deadline"
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
  name="projectName"
  label="Project Name"
  options={projectOptions.map((project) => project.title)}
  getOptionLabel={(option) => option}
  isOptionEqualToValue={(option, value) => option === value}
  renderOption={(props, option) => {
    const selectedProject = projectOptions.find(
      (project) => project.title === option
    );
    if (!selectedProject) {
      return null;
    }

    return (
      <li {...props} key={selectedProject._id}>
        {selectedProject.title}
      </li>
    );
  }}
  onChange={(event, newValue) => {
    const selectedProject = projectOptions.find(
      (project) => project.title === newValue
    );
    if (selectedProject) {
      // Update the form values with the selected project's title and _id
      setValue('projectName', selectedProject.title);
      setValue('project', selectedProject._id);
    } else {
      // Handle the case where no project is selected
      setValue('projectName', '');
      setValue('project', '');
    }
  }}
/>





            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              {!currentTask ? 'Create Task' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

TaskNewEditForm.propTypes = {
  currentTask: PropTypes.object,
};
