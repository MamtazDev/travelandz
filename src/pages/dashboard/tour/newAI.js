import { Helmet } from 'react-helmet-async';
// sections
import { TourAICreateView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourAICreatePage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Create a new tours</title>
      </Helmet>

      <TourAICreateView id='1234'/>
    </>
  );
}
