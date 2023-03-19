import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useAllBasket = () => {
   const [loading, setLoading] = useState(false);
   const [basketList, setBasketList] = useState([]);

   const getBasketList = () => {
      setLoading(true);

      axiosInstance
         .get(`basket`)
         .then((res) => {
            setBasketList(res.data);
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

   return [getBasketList, basketList, loading];
};

export default useAllBasket;
