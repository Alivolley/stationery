import { useContext, useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";
import ReloadContext from "../../context/ReloadContext";

const useDeleteBasket = () => {
   const [loading, setLoading] = useState(false);

   const { basketReload } = useContext(ReloadContext);

   const deleteRequest = (props) => {
      setLoading(true);

      axiosInstance
         .delete(`basket/${props.productId}`)
         .then((res) => {
            if (res.status === 200) {
               axiosInstance
                  .put(`products/${props.productId}`, {
                     file: props.imageSrc,
                     name: props.name,
                     price: props.price,
                     category: props.category,
                     isAvalible: props.isAvalible,
                     describtion: props.describtion,
                     isInBasket: false,
                  })
                  .then((res) => {
                     if (res.status === 200) {
                        props.getBasketList();
                        basketReload();

                        toast.success("با موفقیت از سبد حذف شد .", {
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
         .finally(() => setLoading(false));
   };

   return [deleteRequest, loading];
};

export default useDeleteBasket;
