import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetail = () => {
   const { id } = useParams();

   return (
      <Wrapper>
         <Image src="https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
         <Describtion>
            <Title>خودکار آبی</Title>
            <Price>{(524000).toLocaleString("fa-IR")} تومان</Price>
            <Avalible>
               وضعیت موجودی :<Exist>موجود</Exist>
               {/* <NotExist>نا موجود</NotExist> */}
            </Avalible>
            <Detail>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
               لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
               شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
               کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
               و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </Detail>
         </Describtion>
         <AddBtn>اضافه کردن به سبد خرید</AddBtn>
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
