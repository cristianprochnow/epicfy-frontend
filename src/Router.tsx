import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>Não encontrado!</div>,
    element: <div>Home</div>,
    children: []
  },
  {
    path: '/login',
    errorElement: <div>Não encontrado!</div>,
    element: <div>Login</div>
  },
  {
    path: '/register',
    errorElement: <div>Não encontrado!</div>,
    element: <div>Register</div>,
  }
]);

export function Router() {
  return <RouterProvider router={routes} />
}