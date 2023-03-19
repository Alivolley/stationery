import { useState } from "react";
import axiosInstance from "../../libs/axiosInstance";
import { toast } from "react-toastify";

const useSearch = () => {
   const [loading, setLoading] = useState(false);
   const [productsList, setProductsList] = useState([]);

   const getSearchList = (word) => {
      setLoading(true);

      axiosInstance
         .get(`products?name_like=${word}`)
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

   return [getSearchList, productsList, loading];
};

export default useSearch;
