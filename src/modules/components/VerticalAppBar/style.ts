import styled from '@emotion/styled';
import { AppBar, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  position: 'static',
  flexDirection: 'column',
  width: '50px ',
  height: '100vh',
  backgroundColor: 'rgb(75, 75, 75)',
});

export const StyledToolbar = styled(Toolbar)({
  flexDirection: 'column',
  height: '98vh',
  justifyContent: 'space-between',
  margin: 'auto 0',
});
