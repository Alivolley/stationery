import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Header from "../shared/Header/Header";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import ReloadContext from "../../context/ReloadContext";

const App = () => {
   const [reload, setReload] = useState(false);

   const router = useRoutes(routes);

   const reloadPage = () => setReload((prev) => !prev);

   console.log(reload);

   return (
      <>
         <ReloadContext.Provider value={reloadPage}>
            <Header />
            {router}
            <ToastContainer />
         </ReloadContext.Provider>
      </>
   );
};

export default App;
