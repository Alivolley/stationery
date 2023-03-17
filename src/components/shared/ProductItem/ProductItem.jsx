import React from "react";
import styled from "styled-components";

const ProductItem = () => {
   return (
      <Wrapper>
         <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
         <Describtion>
            <Title>خودکار آبی</Title>
            <Price>{(127000).toLocaleString("fa-IR")} تومان</Price>
            <Avalible>
               وضعیت موجودی :<Exist>موجود</Exist>
               {/* <NotExist>نا موجود</NotExist> */}
            </Avalible>
            <DetailBtn>جزئیات بیشتر</DetailBtn>
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

const DetailBtn = styled.button`
   margin: 0;
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
