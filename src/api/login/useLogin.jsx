import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReloadContext from "../../context/ReloadContext";
import Cookies from "js-cookie";

const useLogin = () => {
   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);
   const appReload = useContext(ReloadContext);

   const getUsersList = (email, password) => {
      setLoading(true);

      axiosInstance
         .get(`users?email=${email}&password=${password}`)
         .then((res) => {
            if (res.data.length) {
               Cookies.set("username", res.data[0].username, { expires: 1 });
               Cookies.set("role", res.data[0].role, { expires: 1 });
               Cookies.set("login", true, { expires: 1 });
               appReload();

               toast.success("با موفقیت وارد شدید .", {
                  theme: "colored",
                  rtl: true,
                  position: toast.POSITION.BOTTOM_RIGHT,
               });

               navigate("/");
            } else {
               toast.error("کاربری با این اطلاعات یافت نشد .", {
                  theme: "colored",
                  rtl: true,
               });
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("ایراد شبکه !!!       احتمالا بک اند خود را run نکرده اید !", {
               theme: "colored",
               rtl: true,
            });
         })
         .finally(() => setLoading(false));
   };

   return [getUsersList, loading];
};

export default useLogin;
