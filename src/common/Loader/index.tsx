import { Box } from '@mui/material';
import style from './style.module.css';

export const Loader = () => {
  return (
    <Box className={style.loaderContainer}>
      <div className={style.lds_dual_ring}></div>;
    </Box>
  );
};
