import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useEditProduct = () => {
   const [loading, setLoading] = useState(false);

   const editRequest = (id, newProduct, onHide, getProductsList) => {
      setLoading(true);

      axiosInstance
         .put(`products/${id}`, newProduct)
         .then((res) => {
            if (res.status === 200) {
               onHide();
               getProductsList();
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

   return [editRequest, loading];
};

export default useEditProduct;
