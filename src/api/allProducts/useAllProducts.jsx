import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useAllProducts = () => {
   const [loading, setLoading] = useState(false);
   const [productsList, setProductsList] = useState([]);

   const getProductsList = () => {
      setLoading(true);

      axiosInstance
         .get(`products`)
         .then((res) => {
            setProductsList(res.data);
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

   return [getProductsList, productsList, loading];
};

export default useAllProducts;
