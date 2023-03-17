import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import ProductDetail from "../shared/ProductDetail/ProductDetail";

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
   {
      id: 3,
      path: "/product/:id",
      element: <ProductDetail />,
   },
];

export default routes;
