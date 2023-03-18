import React, { useEffect, useState } from "react";
import styled from "styled-components";
import loadingImage from "./../../../assets/Images/loading.png";

const TableItem = ({ product, deleteHandle }) => {
   const [picSrc, setPicSrc] = useState();

   useEffect(() => {
      import(`./../../../assets/Images/${product.file}`).then((res) => setPicSrc(res.default));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <tr key={product.id}>
         <td>{product.id}</td>
         <td>
            <Image src={picSrc || loadingImage} />
         </td>
         <td>{product.name}</td>
         <td>{product.category}</td>
         <td>{Number(product.price).toLocaleString("fa-IR")}</td>

         <td>
            <Options>
               <DeleteBtn onClick={() => deleteHandle(product)}>حذف</DeleteBtn>
               <EditBtn>ویرایش</EditBtn>
            </Options>
         </td>
      </tr>
   );
};

export default TableItem;

const Image = styled.img`
   width: 5rem;
   height: 5rem;
`;

const Options = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
`;

const DeleteBtn = styled.button`
   font-size: 1.4rem;
   background-color: var(--red-color);
   color: white;
   border: 0.2rem solid var(--red-color);
   border-radius: 0.5rem;
   padding: 0.2rem 1.2rem;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color: white;
      color: black;
   }
`;

const EditBtn = styled(DeleteBtn)`
   background-color: #ddad0f;
   border-color: #ddad0f;
   color: black;
`;
