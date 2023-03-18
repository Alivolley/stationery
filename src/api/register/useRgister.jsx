import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ReloadContext from "../../context/ReloadContext";

const useRgister = () => {
   const appReload = useContext(ReloadContext);
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const getUsersList = (username, email, password, confirmPassword) => {
      setLoading(true);

      axiosInstance
         .get(`users?email=${email}`)
         .then((res) => {
            if (res.data.length) {
               toast.error("کاربری با این ایمیل وجود دارد.", {
                  theme: "colored",
                  rtl: true,
               });
            } else {
               const newUser = {
                  username: username,
                  email: email,
                  password: password,
                  role: "user",
               };

               axiosInstance
                  .post("users", newUser)
                  .then((res) => {
                     if (res.statusText === "Created") {
                        Cookies.set("username", res.data.username);
                        Cookies.set("role", res.data.role);
                        Cookies.set("login", true);
                        appReload();

                        toast.success("حساب با موفقیت ساخته شد .", {
                           theme: "colored",
                           rtl: true,
                        });

                        navigate("/");
                     }
                  })
                  .catch((err) => {
                     console.log(err);
                     toast.error("ایراد شبکه !!! احتمالا بک اند خود را run نکرده اید !", {
                        theme: "colored",
                        rtl: true,
                     });
                  })
                  .finally(() => setLoading(false));
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("ایراد شبکه !!! احتمالا بک اند خود را run نکرده اید !", {
               theme: "colored",
               rtl: true,
            });
         })
         .finally(() => setLoading(false));
   };

   return [getUsersList, loading];
};

export default useRgister;
