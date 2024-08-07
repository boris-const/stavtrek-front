import { Box, styled, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
  position: 'fixed',
  left: '50%',
  marginLeft: '-100px',
  top: '50%',
  marginTop: '-100px',
  textAlign: 'center',
});

export const StyledTypography = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
});
