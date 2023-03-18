import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import useDeleteProduct from "../../../../api/deleteProduct/useDeleteProduct";
import LoadingBtn from "../../LoadingBtn/LoadingBtn";

const DeleteModal = ({ show, onHide, getProductsList, chosenDeleteDetail }) => {
   const [deleteRequest, loading] = useDeleteProduct();

   const deleteProduct = () => {
      deleteRequest(chosenDeleteDetail.id, getProductsList, onHide);
   };

   return (
      <Modal show={show} onHide={onHide} centered>
         <Wrapper>
            <Title>آیا از حذف {chosenDeleteDetail.name} مطمئن اید ؟</Title>
            <BtnGroup>
               <CancelBtn onClick={onHide}>انصراف</CancelBtn>
               {loading ? <LoadingBtn /> : <AddBtn onClick={deleteProduct}>تایید</AddBtn>}
            </BtnGroup>
         </Wrapper>
      </Modal>
   );
};

export default DeleteModal;

const Wrapper = styled.div`
   direction: rtl;
   padding: 3rem;
`;

const Title = styled.h3``;

const BtnGroup = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 7rem;
`;

const CancelBtn = styled.button`
   font-size: 1.6rem;
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

const AddBtn = styled(CancelBtn)`
   background-color: var(--purple-color);
   border-color: var(--purple-color);
`;
