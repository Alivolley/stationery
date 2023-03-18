import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import useCategories from "../../../../api/categories/useCategories";
import LoadingBtn from "../../LoadingBtn/LoadingBtn";
import Spinner from "react-bootstrap/Spinner";
import useEditProduct from "../../../../api/editProduct/useEditProduct";

const EditModal = ({ show, onHide, getProductsList, chosenEditDetail }) => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [explain, setExplain] = useState("");

   const [editRequest, loading] = useEditProduct();
   const [getCategoryList, categoryList] = useCategories();

   useEffect(() => {
      getCategoryList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (chosenEditDetail) {
         setName(chosenEditDetail.name);
         setPrice(chosenEditDetail.price);
         setCategory(chosenEditDetail.category);
         setExplain(chosenEditDetail.describtion);
      }
   }, [chosenEditDetail]);

   const createProduct = (e) => {
      e.preventDefault();

      if (name && price && category && explain) {
         const newProduct = {
            file: chosenEditDetail.file,
            name,
            price,
            category,
            isAvalible: true,
            describtion: explain,
         };

         editRequest(chosenEditDetail.id, newProduct, onHide, getProductsList);
      } else {
         toast.error("لطفا تمام آیتم ها را پر کنید.", {
            theme: "colored",
            rtl: true,
         });
      }
   };

   return (
      <Modal show={show} onHide={onHide} centered>
         {explain ? (
            <>
               <Title>ویرایش محصول</Title>
               <hr />
               <Box onSubmit={createProduct}>
                  <Item>
                     <Label>نام :</Label>
                     <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  </Item>
                  <Item>
                     <Label>قیمت :</Label>
                     <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                  </Item>
                  <Item>
                     <Label>دسته بندی :</Label>
                     <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <Option value={null} disabled={category ? true : false}>
                           یک گزینه انتخاب کنید
                        </Option>
                        {categoryList.map((item) => (
                           <Option key={item.id} value={item.category}>
                              {item.category}
                           </Option>
                        ))}
                     </Select>
                  </Item>
                  <Item>
                     <Label>توضیحات :</Label>
                     <TextArea rows="6" value={explain} onChange={(e) => setExplain(e.target.value)}></TextArea>
                  </Item>

                  <BtnGroup>
                     <CancelBtn type="button" onClick={onHide}>
                        انصراف
                     </CancelBtn>
                     {loading ? <LoadingBtn /> : <AddBtn type="submit">اضافه کردن</AddBtn>}
                  </BtnGroup>
               </Box>
            </>
         ) : (
            <Spinner animation="border" variant="dark" />
         )}
      </Modal>
   );
};

export default EditModal;

const Title = styled.h3`
   margin-top: 2rem;
   text-align: center;
   font-size: 2.5rem;
   font-weight: 700;
`;

const Box = styled.form`
   direction: rtl;
   padding: 4rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

const Item = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: space-between;
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

const InputFile = styled.input`
   height: 3.5rem;
   font-size: 1.4rem;
   width: 21rem;
   padding: 0 1rem;
`;

const TextArea = styled.textarea`
   font-size: 1.4rem;
   width: 21rem;
   padding: 1rem;
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
   margin-top: 2rem;
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

const Select = styled.select`
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

const Option = styled.option``;
