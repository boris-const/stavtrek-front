import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import HorizontalAppBar from './components/HorizontalAppBar';
import VerticalAppBar from './components/VerticalAppBar';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <VerticalAppBar />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:"100vw" }}>
        <Box sx={{ flexGrow: 1 }}>
          <HorizontalAppBar />
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
