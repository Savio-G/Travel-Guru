import {
  createBrowserRouter,
} from "react-router-dom";
import Layout1 from "../Layouts/Layout1";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1></Layout1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/places')
      }
    ]
  },
]);

export default router;