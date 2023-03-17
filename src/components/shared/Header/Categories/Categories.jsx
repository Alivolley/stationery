import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Categories = () => {
   const [showCat, setShowCat] = useState(false);

   return (
      <CategoriesWrapper>
         <ToggleButton onClick={() => setShowCat((prev) => !prev)}>
            {showCat ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            دسته بندی ها
         </ToggleButton>
         {showCat && (
            <CategoriesBox>
               <CatItem href="#">خودکار</CatItem>
               <CatItem href="#">دفتر</CatItem>
               <CatItem href="#">پاک کن</CatItem>
               <CatItem href="#">مداد</CatItem>
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
   min-width: 10rem;
   z-index: 10;
`;

const CatItem = styled.a`
   text-decoration: none;
   color: black;
`;
