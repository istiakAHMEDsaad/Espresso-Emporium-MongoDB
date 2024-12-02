import { createBrowserRouter } from 'react-router-dom';
import CardDetails from '../Components/CardDetails';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import SignUp from '../Pages/SignUp';
import UpdateCoffee from '../Pages/UpdateCoffee';
import User from '../Pages/User';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: `/add-coffee/:_id`,
        element: <CardDetails></CardDetails>,
      },
      {
        path: `/update-coffee/:id`,
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-pi-seven.vercel.app/add-coffee/${params.id}`
          ),
      },
      {
        path: `/signup`,
        element: <SignUp></SignUp>,
      },
      {
        path: `/login`,
        element: <Login></Login>,
      },
      {
        path: `/user`,
        element: <User></User>,
        loader: () =>
          fetch(`https://espresso-emporium-server-pi-seven.vercel.app/users/`),
      },
      {
        path: '*',
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
