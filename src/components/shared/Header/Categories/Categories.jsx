import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import useCategories from "../../../../api/categories/useCategories";
import { Link } from "react-router-dom";

const Categories = () => {
   const [showCat, setShowCat] = useState(false);
   const [getCategoryList, categoryList] = useCategories();

   useEffect(() => {
      getCategoryList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <CategoriesWrapper>
         <ToggleButton onClick={() => setShowCat((prev) => !prev)}>
            {showCat ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            دسته بندی ها
         </ToggleButton>
         {showCat && (
            <CategoriesBox>
               {categoryList.map((item) => (
                  <CatItem key={item.id} to={`/category/${item.id}`}>
                     {item.category}
                  </CatItem>
               ))}
            </CategoriesBox>
         )}
      </CategoriesWrapper>
   );
};

export default Categories;

const CategoriesWrapper = styled.div`
   position: relative;
`;

const ToggleButton = styled.button`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 1.5rem;
   border: none;
   background-color: transparent;
   cursor: pointer;
   border-bottom: 0.2rem solid transparent;
   transition: all 0.2s;

   &:hover {
      border-color: var(--purple-color);
   }
`;

const CategoriesBox = styled.div`
   position: absolute;
   top: 100%;
   right: 0;
   background-color: var(--secondary-color);
   border: 0.1rem solid black;
   border-radius: 0.5rem;
   display: flex;
   flex-direction: column;
   padding: 1.5rem;
   gap: 2rem;
   direction: rtl;
   width: max-content;
   z-index: 10;
`;

const CatItem = styled(Link)`
   text-decoration: none;
   color: black;
`;
