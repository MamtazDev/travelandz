import { Helmet } from "react-helmet-async";
// sections
import { ClientHome } from "src/sections/client-home/view";

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> TRAVELANDZ FOR TRAVELLERS</title>
      </Helmet>

      <ClientHome />
    </>
  );
}
