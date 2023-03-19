import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useDeleteBasket from "../../../api/deleteBasket/useDeleteBasket";
import loadingImage from "./../../../assets/Images/loading.png";

const BasketItem = (props) => {
   const [picSrc, setPicSrc] = useState();

   const [deleteRequest, loading] = useDeleteBasket();

   useEffect(() => {
      import(`./../../../assets/Images/${props.imageSrc}`).then((res) => setPicSrc(res.default));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const deleteFromBasket = () => {
      deleteRequest(props);
   };

   return (
      <Wrapper>
         <Image src={picSrc || loadingImage} />
         <Describtion>
            <Title>{props.name}</Title>
            <Price>{Number(props.price).toLocaleString("fa-IR")} تومان</Price>
            <Category>دسته بندی : {props.category}</Category>
            <DeleteBtn onClick={deleteFromBasket}>حذف از سبد</DeleteBtn>
         </Describtion>
      </Wrapper>
   );
};

export default BasketItem;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
   direction: rtl;
   background-color: white;
   border: 0.1rem solid black;
   padding: 1.5rem;
   margin-top: 3rem;
   border-radius: 0.5rem;
`;

const Image = styled.img`
   width: 15rem;
   height: 15rem;
   border: 0.1rem solid gray;
`;

const Describtion = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 1rem;
   width: 100%;
`;

const Title = styled.h3`
   margin: 0;
   font-size: 2rem;
   font-weight: 700;
`;

const Price = styled.p`
   margin: 0;
   margin-top: 1.5rem;
`;

const Avalible = styled.div`
   margin: 0;
   display: flex;
   gap: 0.5rem;
`;

const Category = styled(Avalible)``;

const DeleteBtn = styled.button`
   margin-right: auto;
   text-decoration: none;
   font-size: 1.4rem;
   background-color: var(--red-color);
   color: white;
   border: 0.2rem solid var(--red-color);
   border-radius: 0.5rem;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color: white;
      color: black;
   }
`;
