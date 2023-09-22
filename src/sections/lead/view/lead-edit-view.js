import PropTypes from "prop-types";
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
import LeadNewEditForm from "../lead-new-edit-form";

// ----------------------------------------------------------------------

export default function LeadEditView({ id }) {
  const settings = useSettingsContext();

  const currentLead = _userList.find((user) => user.id === id);

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
            name: "Provider",
            href: paths.dashboard.providers.root,
          },
          { name: currentLead?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <LeadNewEditForm currentLead={currentLead} />
    </Container>
  );
}

LeadEditView.propTypes = {
  id: PropTypes.string,
};
