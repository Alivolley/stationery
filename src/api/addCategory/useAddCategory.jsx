import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAddCategory = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const addRequest = (newCategory) => {
      setLoading(true);

      axiosInstance
         .post(`categories`, newCategory)
         .then((res) => {
            if (res.statusText === "Created") {
               navigate(0);
            }
         })
         .catch((err) => {
            console.log(err);
            toast.error("ایراد شبکه !!!احتمالا بک اند خود را run نکرده اید !", {
               theme: "colored",
               rtl: true,
            });
         })
         .finally(() => setLoading(false));
   };

   return [addRequest, loading];
};

export default useAddCategory;
