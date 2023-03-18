import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useProductDetail from "../../../api/productDetail/useProductDetail";
import Spinner from "react-bootstrap/Spinner";
import loadingImage from "./../../../assets/Images/loading.png";

const ProductDetail = () => {
   const [picSrc, setPicSrc] = useState();
   const { id } = useParams();

   const [getProductsDetail, mainProducts, loading] = useProductDetail(id);

   useEffect(() => {
      getProductsDetail();
   }, []);

   useEffect(() => {
      mainProducts.file && import(`./../../../assets/Images/${mainProducts.file}`).then((res) => setPicSrc(res.default));
   }, [mainProducts.file]);

   return (
      <Wrapper>
         {loading ? (
            <Spinner animation="border" variant="dark" />
         ) : (
            <>
               <Image src={picSrc || loadingImage} />
               <Describtion>
                  <Title>{mainProducts.name}</Title>
                  <Price>{Number(mainProducts.price).toLocaleString("fa-IR")} تومان</Price>
                  <Avalible>وضعیت موجودی :{mainProducts.isAvalible ? <Exist>موجود</Exist> : <NotExist>نا موجود</NotExist>}</Avalible>
                  <Detail>{mainProducts.describtion}</Detail>
               </Describtion>
               <AddBtn>اضافه کردن به سبد خرید</AddBtn>
            </>
         )}
      </Wrapper>
   );
};

export default ProductDetail;

const Wrapper = styled.div`
   margin: 0 12rem;
   margin-top: 4rem;
`;

const Image = styled.img`
   height: 20rem;
   display: block;
   margin: 0 auto;
   border: 0.1rem solid gray;
   border-radius: 0.5rem;
`;

const Describtion = styled.div`
   direction: rtl;
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

const Exist = styled.p`
   font-weight: 700;
   color: var(--purple-color);
`;

const NotExist = styled.p`
   font-weight: 700;
   color: var(--red-color);
`;

const Detail = styled.p``;

const AddBtn = styled.button`
   background-color: var(--purple-color);
   color: white;
   border: 0.2rem solid var(--purple-color);
   border-radius: 0.5rem;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
   transition: all 0.2s;
   margin-top: 2rem;

   &:hover {
      background-color: white;
      color: black;
   }
`;
