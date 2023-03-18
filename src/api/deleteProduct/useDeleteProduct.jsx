import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useDeleteProduct = () => {
   const [loading, setLoading] = useState(false);

   const deleteRequest = (id, getProductsList, onHide) => {
      setLoading(true);

      axiosInstance
         .delete(`products/${id}`)
         .then((res) => {
            if (res.status === 200) {
               getProductsList();
               onHide();

               toast.success("محصول با موفقیت حذف شد .", {
                  theme: "colored",
                  rtl: true,
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
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

   return [deleteRequest, loading];
};

export default useDeleteProduct;
