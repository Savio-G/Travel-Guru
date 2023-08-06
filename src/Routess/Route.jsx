import {
  createBrowserRouter,
} from "react-router-dom";
import Layout1 from "../Layouts/Layout1";
import Home from "../Components/Home";
import Booking from "../Components/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1></Layout1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/places')
      },
      {
        path: "/Booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
      }
    ]
  },
]);

export default router;