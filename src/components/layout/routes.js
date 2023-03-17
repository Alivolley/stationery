import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";

const routes = [
   {
      id: 1,
      path: "/",
      element: <Home />,
   },
   {
      id: 2,
      path: "/register",
      element: <Register />,
   },
];

export default routes;
