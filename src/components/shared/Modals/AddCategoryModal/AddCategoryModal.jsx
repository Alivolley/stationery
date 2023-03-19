import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import LoadingBtn from "../../LoadingBtn/LoadingBtn";
import useAddCategory from "../../../../api/addCategory/useAddCategory";

const AddCategoryModal = ({ show, onHide }) => {
   const [catName, setCatName] = useState("");

   const [addRequest, loading] = useAddCategory();

   const addCategoryHandler = () => {
      if (catName) {
         const newCategory = {
            category: catName,
         };

         addRequest(newCategory);
      }
   };

   return (
      <Modal show={show} onHide={onHide} centered>
         <Title>اضافه کردن دسته بندی جدید</Title>
         <hr />
         <Wrapper>
            <Item>
               <Label>نام :</Label>
               <Input type="text" value={catName} onChange={(e) => setCatName(e.target.value)} />
            </Item>
            <BtnGroup>
               <CancelBtn onClick={onHide}>انصراف</CancelBtn>
               {loading ? <LoadingBtn /> : <AddBtn onClick={addCategoryHandler}>تایید</AddBtn>}
            </BtnGroup>
         </Wrapper>
      </Modal>
   );
};

export default AddCategoryModal;

const Wrapper = styled.div`
   direction: rtl;
   padding: 3rem;
`;

const Title = styled.h3`
   margin-top: 2rem;
   text-align: center;
   font-size: 2.5rem;
   font-weight: 700;
`;

const Item = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   gap: 3rem;
`;

const Label = styled.label``;

const Input = styled.input`
   height: 3.5rem;
   font-size: 1.4rem;
   width: 21rem;
   padding: 0 1rem;
   border: 0.1rem solid black;
   border-radius: 0.2rem;

   &:focus {
      outline: 0.1rem solid var(--purple-color);
   }
`;

const BtnGroup = styled.div`
   display: flex;
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 4rem;
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
