// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import TaskNewEditForm from '../task-new-edit-form';

// ----------------------------------------------------------------------

export default function TaskCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Create a new task"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Tasks',
            href: paths.dashboard.task.root,
          },
          { name: 'New task' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <TaskNewEditForm />
    </Container>
  );
}
