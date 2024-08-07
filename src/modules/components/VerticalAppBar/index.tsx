import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box,IconButton} from '@mui/material';
import { Logout, Menu as MenuIcon, Home as HomeIcon, DataObject as ObjectIcon } from '@mui/icons-material';

import { useAppDispatch } from '../../../app/hooks';
import { setLogOut } from '../../../redux/slices/authSlice';

import { StyledAppBar, StyledToolbar } from './style';

export default function VerticalAppBar() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(setLogOut());
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Box>
          <IconButton
            size="large"
            aria-label="MenuButton"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => toast.error('No action yet')}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="HomeButton"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate('/')}
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="ObjectsButton"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate('/objects')}
            color="inherit"
          >
            <ObjectIcon />
          </IconButton>
        </Box>
        <div>
          <IconButton
            size="large"
            aria-label="logOutButton"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Logout />
          </IconButton>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
}
