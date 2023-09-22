import { Helmet } from 'react-helmet-async';
// sections
import { TaskCreateView } from 'src/sections/task/view';

// ----------------------------------------------------------------------

export default function TaskCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new task</title>
      </Helmet>

      <TaskCreateView />
    </>
  );
}
