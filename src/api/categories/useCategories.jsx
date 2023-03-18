import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useCategories = () => {
   const [categoryList, setCategoryList] = useState([]);

   const getCategoryList = () => {
      axiosInstance
         .get(`categories`)
         .then((res) => {
            setCategoryList(res.data);
         })
         .catch((err) => {
            console.log(err);
            toast.error("ایراد شبکه !!!احتمالا بک اند خود را run نکرده اید !", {
               theme: "colored",
               rtl: true,
            });
         });
   };

   return [getCategoryList, categoryList];
};

export default useCategories;
