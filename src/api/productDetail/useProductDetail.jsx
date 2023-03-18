import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useProductDetail = (id) => {
   const [loading, setLoading] = useState(false);
   const [mainProducts, setMainProducts] = useState({});

   const getProductsDetail = () => {
      setLoading(true);

      axiosInstance
         .get(`products/${id}`)
         .then((res) => {
            setMainProducts(res.data);
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

   return [getProductsDetail, mainProducts, loading];
};

export default useProductDetail;
