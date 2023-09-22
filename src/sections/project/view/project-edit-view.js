import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';

// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import ProjectNewEditForm from '../project-new-edit-form';

// ----------------------------------------------------------------------

export default function ProjectEditView({ id }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [projectList, setProjectList] = useState([]);
  const settings = useSettingsContext();

  async function fetchProjectList() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/projects`); // Replace the URL with your backend API endpoint to fetch the project list
      return response.data;
    } catch (error) {
      console.error('Error fetching project list:', error);
      throw error;
    }
  }

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const projects = await fetchProjectList();
        setProjectList(projects);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentProject = projectList.find((project) => project.id === id);

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Project',
            href: paths.dashboard.project.root,
          },
          { name: currentProject?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <ProjectNewEditForm currentProject={currentProject} />
    </Container>
  );
}

ProjectEditView.propTypes = {
  id: PropTypes.string,
};
