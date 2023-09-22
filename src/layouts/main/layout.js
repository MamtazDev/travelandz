import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isAgentView = pathname === '/agent-view'
  const isCustomerView = pathname === '/ai-travel-planner'
  console.log('pathname', pathname)
  console.log('isAgentView', isAgentView)
  console.log('isCustomerView', isCustomerView)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>

     {
      isCustomerView ? '' :  <Header />
     }

      {
        isAgentView ? <div>{children}</div> : <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>
      }

      
      {
      isAgentView ? '' :  <Footer />
     }
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
