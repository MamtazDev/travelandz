import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
// @mui
import Container from "@mui/material/Container";
// routes
import { paths } from "src/routes/paths";
// _mock
import { _userList } from "src/_mock";
// components
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//
import CustomerEditForm from "../customer-edit-form";

// ----------------------------------------------------------------------

export default function CustomerEditView({ id }) {
  const settings = useSettingsContext();

  const [currentUser, setCurrentUser] = useState();
  // const currentUser = _userList.find((user) => user.id === id);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${process.env.REACT_APP_HOST_API}/customers/${id}`)
      .then((response) => {
        console.log("single customer API resp", response.data);

        setCurrentUser(response.data);
        // Assuming the API response contains the user list
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: "Dashboard",
            href: paths.dashboard.root,
          },
          {
            name: "Customer",
            href: paths.dashboard.customer.root,
          },
          { name: currentUser?.customerName },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CustomerEditForm currentUser={currentUser} id={id} />
    </Container>
  );
}

CustomerEditView.propTypes = {
  id: PropTypes.string,
};
