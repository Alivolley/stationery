import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useAddProduct = () => {
   const [loading, setLoading] = useState(false);

   const addRequest = (newProduct, emptyInputs) => {
      setLoading(true);

      axiosInstance
         .post(`products`, newProduct)
         .then((res) => {
            if (res.statusText === "Created") {
               toast.success("محصول جدید اضافه شد .", {
                  theme: "colored",
                  rtl: true,
                  position: toast.POSITION.BOTTOM_RIGHT,
               });

               emptyInputs();
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

export default useAddProduct;
