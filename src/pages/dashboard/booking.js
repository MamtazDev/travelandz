import { Helmet } from 'react-helmet-async';
// sections
import { useParams } from 'src/routes/hooks';

import { OverviewBankingView } from 'src/sections/overview/booking/view';

// ----------------------------------------------------------------------

export default function OverviewBookingPage() {
  const params = useParams();
  const { companyId } = params;
  return (
    <>
      <Helmet>
        <title> Dashboard: Booking</title>
      </Helmet>

      <OverviewBankingView/>

    </>
  );
}
