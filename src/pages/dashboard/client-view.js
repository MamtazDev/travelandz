import { Helmet } from 'react-helmet-async';
import ClientViewPage from 'src/sections/client-view/view';
// ----------------------------------------------------------------------

export default function ClientView() {
  return (
    <>
       <Helmet>
        <title> Client View</title>
      </Helmet>
      <ClientViewPage/>
    </>
  );
}
