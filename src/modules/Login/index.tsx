import { useState } from 'react';

import { Box, Button, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getSessionData } from '../../redux/services/authService';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #1565c0',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

type LoginState = {
  email: string;
  password: string;
};

export const Login = () => {
  const [userData, setUserData] = useState<LoginState>({ email: '', password: '' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const [showPassword, setShowPassword] = useState(false); // Глазик

  const handleClickShowPassword = () => setShowPassword(!showPassword); // Глазик
  const handleMouseDownPassword = () => setShowPassword(!showPassword); // Глазик

  const changeAddTodoHandler = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitAddTodoHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(getSessionData({ ...userData }));
    if (isAuth) {
      navigate('/');
      setUserData({ email: '', password: '' });
    }
  };

  const { email, password } = userData;

  return (
    <>
      <Box sx={style}>
        <Typography id="transition-modal-title" variant="h6" component="h2" align="center" sx={{ marginBottom: '25px' }}>
          Log in system
        </Typography>

        <Box
          component="form"
          onSubmit={submitAddTodoHandler}
          sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
        >
          <TextField
            name="email"
            type="email"
            id="outlined-controlled-email"
            label="Email"
            required
            fullWidth
            value={email}
            onChange={changeAddTodoHandler}
          />
          <TextField
            name="password"
            type={showPassword ? 'text' : 'password'}
            id="outlined-controlled-password"
            label="Password"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={changeAddTodoHandler}
            InputProps={{              
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, mb: 2 }}>
            Auth
          </Button>
        </Box>
      </Box>
    </>
  );
};
