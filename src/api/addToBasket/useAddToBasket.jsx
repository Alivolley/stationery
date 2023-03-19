import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import ReloadContext from "../../context/ReloadContext";

const useAddToBasket = () => {
   const [basketLoading, setBasketLoading] = useState(false);

   const { basketReload } = useContext(ReloadContext);

   const addRequest = (newBasketProduct, getProductsDetail, mainProducts) => {
      setBasketLoading(true);

      axiosInstance
         .post(`basket`, newBasketProduct)
         .then((res) => {
            if (res.statusText === "Created") {
               axiosInstance
                  .put(`products/${mainProducts.id}`, {
                     file: mainProducts.file,
                     name: mainProducts.name,
                     price: mainProducts.price,
                     category: mainProducts.category,
                     isAvalible: mainProducts.isAvalible,
                     describtion: mainProducts.describtion,
                     isInBasket: true,
                  })
                  .then((res) => {
                     if (res.status === 200) {
                        getProductsDetail();
                        basketReload();

                        toast.success("با موفقیت به سبد اضافه شد .", {
                           theme: "colored",
                           rtl: true,
                           position: toast.POSITION.BOTTOM_RIGHT,
                        });
                     }
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
         .finally(() => setBasketLoading(false));
   };

   return [addRequest, basketLoading];
};

export default useAddToBasket;
