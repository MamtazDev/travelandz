import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// _mock
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
//
import TaskNewEditForm from '../task-new-edit-form';

// ----------------------------------------------------------------------

export default function TaskEditView({ id }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const settings = useSettingsContext();

  async function fetchTaskList() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/tasks`); // Replace the URL with your backend API endpoint to fetch the task list
      return response.data;
    } catch (error) {
      console.error('Error fetching task list:', error);
      throw error;
    }
  }

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const tasks = await fetchTaskList();
        setTaskList(tasks);
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

  const currentTask = taskList.find((task) => task.id === id);

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
            name: 'Task',
            href: paths.dashboard.task.root,
          },
          { name: currentTask?.name },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <TaskNewEditForm currentTask={currentTask} />
    </Container>
  );
}

TaskEditView.propTypes = {
  id: PropTypes.string,
};
