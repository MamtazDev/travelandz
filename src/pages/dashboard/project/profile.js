import { Helmet } from 'react-helmet-async';
// sections
import { ProjectProfileView } from 'src/sections/project/view';

// ----------------------------------------------------------------------

export default function ProjectProfilePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Project Profile</title>
      </Helmet>

      <ProjectProfileView />
    </>
  );
}
