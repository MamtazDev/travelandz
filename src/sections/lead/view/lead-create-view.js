// @mui
import Container from "@mui/material/Container";
// routes
import { paths } from "src/routes/paths";
// components
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//
import ProviderNewEditForm from "../lead-new-edit-form";

// ----------------------------------------------------------------------

export default function LeadCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Create a new provider"
        links={[
          {
            name: "Dashboard",
            href: paths.dashboard.root,
          },
          {
            name: "Provider",
            href: paths.dashboard.providers.root,
          },
          { name: "New Provider" },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProviderNewEditForm />
    </Container>
  );
}
