import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useGetBasketCount = () => {
   const [basketCount, setBasketCount] = useState(0);

   const getBasketCount = () => {
      axiosInstance
         .get(`basket`)
         .then((res) => {
            setBasketCount(res.data.length);
         })
         .catch((err) => {
            console.log(err);
            toast.error("ایراد شبکه !!!احتمالا بک اند خود را run نکرده اید !", {
               theme: "colored",
               rtl: true,
            });
         });
   };

   return [getBasketCount, basketCount];
};

export default useGetBasketCount;
