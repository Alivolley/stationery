import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Header from "../shared/Header/Header";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import ReloadContext from "../../context/ReloadContext";
import useGetBasketCount from "../../api/getBasketCount/useGetBasketCount";

const App = () => {
   // eslint-disable-next-line no-unused-vars
   const [reload, setReload] = useState(false);
   const router = useRoutes(routes);
   const reloadPage = () => setReload((prev) => !prev);
   const [getBasketCount, basketCount] = useGetBasketCount();

   return (
      <>
         <ReloadContext.Provider value={{ appReload: reloadPage, basketReload: getBasketCount }}>
            <Header basketCount={basketCount} />
            {router}
            <ToastContainer />
         </ReloadContext.Provider>
      </>
   );
};

export default App;
