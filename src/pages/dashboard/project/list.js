import { Helmet } from 'react-helmet-async';
// sections
import { ProjectListView } from 'src/sections/project/view';
import { useCompany } from "src/components/session";

// ----------------------------------------------------------------------

export default function ProjectListPage() {
  const { userId, companyId, userName } = useCompany(); // Use the hook to get context values


  return (
    <>
      <Helmet>
        <title> Dashboard: Project List</title>
      </Helmet>

      <ProjectListView />
    </>
  );
}
