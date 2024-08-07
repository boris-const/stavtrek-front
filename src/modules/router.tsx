import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from './HomePage';
import { Login } from './Login';
import { ObjectsPage } from './ObjectsPage';
import { useAppSelector } from '../app/hooks';

const Router = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const router = createBrowserRouter([
    {
      path: '/',
      element: isAuth ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          index: true,
        },
        {
          path: '/objects',
          element: <ObjectsPage />,
        },
      ],
    },
    {
      path: '/login',
      element: isAuth ? <Navigate to="/" /> : <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
