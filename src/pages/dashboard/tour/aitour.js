import { Helmet } from 'react-helmet-async';
// sections
import { TourAIDisplayView } from 'src/sections/tour/view';

// ----------------------------------------------------------------------

export default function TourAIDisplayPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Display a new tour</title>
      </Helmet>

      <TourAIDisplayView />
    </>
  );
}
