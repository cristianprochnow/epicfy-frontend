import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './screens/Login';
import { NotFound } from './screens/NotFound';
import { Register } from './screens/Register';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <div>Home</div>,
    children: []
  },
  {
    path: '/login',
    errorElement: <NotFound />,
    element: <Login />
  },
  {
    path: '/register',
    errorElement: <NotFound />,
    element: <Register />,
  }
]);

export function Router() {
  return <RouterProvider router={routes} />
}