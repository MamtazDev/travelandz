import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"; // Import axios for making HTTP requests
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

// @mui
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// routes
import { RouterLink } from "src/routes/components";
import { useRouter, useSearchParams } from "src/routes/hooks";
import { paths } from "src/routes/paths";
// config
import { PATH_AFTER_LOGIN } from "src/config-global";
// hooks
import { useBoolean } from "src/hooks/use-boolean";
// auth
import { useAuthContext } from "src/auth/hooks";
import { useCompany } from "src/components/session"; // Import the useCompany hook
// components
import FormProvider, { RHFTextField } from "src/components/hook-form";
import Iconify from "src/components/iconify";
// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const { login } = useAuthContext();

  const router = useRouter();

  const companyContext = useCompany(); // Use the useCompany hook to get the context values

  const [errorMsg, setErrorMsg] = useState("");

  const searchParams = useSearchParams();

  const returnTo = searchParams.get("returnTo");

  const password = useBoolean();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "demo@minimals.cc",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // const response = await axios.post('http://127.0.0.1:4000/users/login', {
      const response = await axios.post(`http://localhost:4000/users/login`, {
      // const response = await axios.post(`${process.env.REACT_APP_HOST_API}/users/login`, {
        email: data.email,
        password: data.password,
      });
      // Assuming your backend returns a success response with a token or user data
      const userData = response.data.user; // Assuming the response has the user data

      console.log("USER DATA IS ", userData);

      companyContext.updateUserContext(userData); // Call the updateUserContext function

      await login?.(data.email, data.password);
      router.push(returnTo || PATH_AFTER_LOGIN);

    } catch (error) {
      reset();
      setErrorMsg(typeof error === "string" ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4">Sign in to Travelandz</Typography>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <RHFTextField name="email" label="Email address" />

      <RHFTextField
        name="password"
        label="Password"
        type={password.value ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? "solar:eye-bold" : "solar:eye-closed-bold"
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Link
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: "flex-end" }}
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
