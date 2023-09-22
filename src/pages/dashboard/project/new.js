import { Helmet } from 'react-helmet-async';
// sections
import { ProjectCreateView } from 'src/sections/project/view';

// ----------------------------------------------------------------------

export default function ProjectCreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new project</title>
      </Helmet>

      <ProjectCreateView />
    </>
  );
}
