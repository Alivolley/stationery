import Basket from "../../pages/Basket/Basket";
import CategoryDetail from "../../pages/CategoryDetail/CategoryDetail";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../private/PrivateRoute";
import ProductDetail from "../shared/ProductDetail/ProductDetail";

const routes = [
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/*",
      element: <PrivateRoute />,
      children: [
         {
            path: "dashboard",
            element: <Dashboard />,
         },
         {
            path: "basket",
            element: <Basket />,
         },
      ],
   },
   {
      path: "/product/:id",
      element: <ProductDetail />,
   },
   {
      path: "/category/:id",
      element: <CategoryDetail />,
   },
];

export default routes;
