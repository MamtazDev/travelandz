import { Helmet } from 'react-helmet-async';
import ClientBookView from 'src/sections/client-book-view/view';

// ----------------------------------------------------------------------

export default function ClientView() {
  return (
    <>
       <Helmet>
        <title> Client View</title>
      </Helmet>
      <ClientBookView />
  
    </>
  );
}
