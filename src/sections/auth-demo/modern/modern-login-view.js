import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import axios from 'axios'; 
// ----------------------------------------------------------------------
import { useRouter, useSearchParams } from "src/routes/hooks";
// config
import { PATH_AFTER_LOGIN } from "src/config-global";
// hooks
// auth
import { useAuthContext } from "src/auth/hooks";
import { useCompany } from "src/components/session"; 

export default function ModernLoginView() {
  const password = useBoolean();
  const router = useRouter();

  const { login } = useAuthContext();

  const companyContext = useCompany(); // Use the useCompany hook to get the context values

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'petarda@gmail.com',
    password: '123',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo");

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Make a POST request to your login API endpoint
      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await axios.post(`${process.env.REACT_APP_HOST_API}/users/login`, {
        email: data.email,
        password: data.password,
      });

      console.log(response)

      // Check if the login was successful (you may need to adjust this based on your API response structure)
      if (response.status === 200) {
        console.log('Login successful');
        const userData = response.data.user; // Assuming the response has the user data

        console.log("USER DATA IS ", userData);

        companyContext.updateUserContext(userData); // Call the updateUserContext function

        await login?.(data.email, data.password);
        router.push(returnTo || PATH_AFTER_LOGIN);
          // You can perform additional actions here, such as setting authentication tokens or redirecting the user.
      } else {
        console.error('Login failed');
        // Handle login failure, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error('Login error', error);
      // Handle login error, e.g., display an error message to the user.
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">Sign in to Travelandz</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">New user?</Typography>

        <Link component={RouterLink} href={paths.authDemo.modern.register} variant="subtitle2">
          Create an account
        </Link>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        component={RouterLink}
        href={paths.authDemo.modern.forgotPassword}
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        sx={{ justifyContent: 'space-between', pl: 2, pr: 1.5 }}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderHead}

      {renderForm}
    </FormProvider>
  );
}
