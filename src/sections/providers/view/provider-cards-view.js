// @mui
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// routes
import { paths } from "src/routes/paths";
// _mock
import { _userCards } from "src/_mock";
// components
import Iconify from "src/components/iconify";
import { RouterLink } from "src/routes/components";
import { useSettingsContext } from "src/components/settings";
import CustomBreadcrumbs from "src/components/custom-breadcrumbs";
//
import ProviderCardList from "../provider-card-list";

// ----------------------------------------------------------------------

export default function ProviderCardsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : "lg"}>
      <CustomBreadcrumbs
        heading="Provider Cards"
        links={[
          { name: "Dashboard", href: paths.dashboard.root },
          { name: "Providers", href: paths.dashboard.providers.root },
          { name: "Cards.." },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.providers.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New Provider
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <ProviderCardList users={_userCards} />
    </Container>
  );
}
