import { useEffect, useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import Router from './modules/router';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getSessionData } from './redux/services/authService';
import { Loader } from './common/Loader';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const isAuth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (!isAuth.isAuth && email && password) {
      dispatch(getSessionData({ email, password }))
        .unwrap()
        .then(() => setLoading(false));
    } else {
      setLoading(false)
    }
  }, [isAuth.isAuth]);  

  return !loading ? (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Router />
    </>
  ) : (
    <Loader />
  );
}

export { App };
