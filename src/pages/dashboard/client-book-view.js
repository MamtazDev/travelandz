import { Helmet } from "react-helmet-async";
import ClientBookViewPage from "src/sections/client-book-view/view";
// ----------------------------------------------------------------------

export default function ClientBookView() {
  return (
    <>
      <Helmet>
        <title>Client Book View</title>
      </Helmet>
      <ClientBookViewPage />
    </>
  );
}
