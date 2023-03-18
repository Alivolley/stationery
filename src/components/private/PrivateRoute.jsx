import Cookies from "js-cookie";
import React from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const Privateroute = () => {
   const isLogedIn = Cookies.get("login");

   const reDirect = () => {
      toast.error("برای دسترسی ابتدا وارد حساب کاربری خود شوید .", {
         theme: "colored",
         rtl: true,
      });
   };

   return <>{isLogedIn ? <Outlet /> : reDirect()}</>;
};

export default Privateroute;
