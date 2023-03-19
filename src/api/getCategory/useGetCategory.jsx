import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useGetCategory = (id) => {
   const [loading, setLoading] = useState(true);
   const [mainCategoryList, setMainCategoryList] = useState([]);

   const getCategoryDetail = () => {
      setLoading(true);

      axiosInstance
         .get(`categories/${id}`)
         .then((res) => {
            axiosInstance.get(`products?category=${res.data.category}`).then((res) => setMainCategoryList(res.data));
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

   return [getCategoryDetail, mainCategoryList, loading];
};

export default useGetCategory;
