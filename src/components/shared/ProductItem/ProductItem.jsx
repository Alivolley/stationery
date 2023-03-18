import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductItem = ({ category, describtion, imageSrc, isAvalible, name, price, productId }) => {
   return (
      <Wrapper>
         <Image src={imageSrc} />
         <Describtion>
            <Title>{name}</Title>
            <Price>{Number(price).toLocaleString("fa-IR")} تومان</Price>
            <Avalible>وضعیت موجودی :{isAvalible ? <Exist>موجود</Exist> : <NotExist>نا موجود</NotExist>}</Avalible>
            <Category>دسته بندی : {category}</Category>
            <DetailBtn to={`/product/${productId}`}>جزئیات بیشتر</DetailBtn>
         </Describtion>
      </Wrapper>
   );
};

export default ProductItem;

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

const DetailBtn = styled(Link)`
   margin: 0;
   text-align: center;
   text-decoration: none;
   font-size: 1.4rem;
   background-color: var(--purple-color);
   color: white;
   border: 0.2rem solid var(--purple-color);
   border-radius: 0.5rem;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
   transition: all 0.2s;
   width: 12rem;
   margin-right: auto;
   margin-top: 2rem;

   &:hover {
      background-color: white;
      color: black;
   }
`;

const Exist = styled.p`
   font-weight: 700;
   color: var(--purple-color);
`;

const NotExist = styled.p`
   font-weight: 700;
   color: var(--red-color);
`;
