import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "../shared/Header/Header";
import routes from "./routes";

const App = () => {
   const router = useRoutes(routes);
   return (
      <>
         <Header />
         {router}
      </>
   );
};

export default App;
