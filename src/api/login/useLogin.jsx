import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
   const navigate = useNavigate();

   const [loading, setLoading] = useState(false);

   const getUsersList = (email, password) => {
      setLoading(true);

      axiosInstance
         .get(`users?email=${email}&password=${password}`)
         .then((res) => {
            if (res.data.length) {
               toast.success("با موفقیت وارد شدید .", {
                  theme: "colored",
                  rtl: true,
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
