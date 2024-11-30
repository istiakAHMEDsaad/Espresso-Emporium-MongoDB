import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';
import CardDetails from '../Components/CardDetails';
import UpdateCoffee from '../Pages/UpdateCoffee';
import NotFound from '../Pages/NotFound';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';

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
        loader: ({params}) => fetch(`http://localhost:3000/add-coffee/${params.id}`)
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
        path: "*",
        element: <NotFound></NotFound>,
      }
    ],
  },
]);

export default router;
