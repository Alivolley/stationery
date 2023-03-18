import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import useAddProduct from "../../../../api/addProduct/useAddProduct";
import LoadingBtn from "../../LoadingBtn/LoadingBtn";
import useCategories from "../../../../api/categories/useCategories";

const AddModal = ({ show, onHide, getProductsList }) => {
   const [name, setName] = useState("");
   const [price, setPrice] = useState("");
   const [category, setCategory] = useState("");
   const [explain, setExplain] = useState("");
   const [imageSrc, setImageSrc] = useState("");

   const [addRequest, loading] = useAddProduct();
   const [getCategoryList, categoryList] = useCategories();

   useEffect(() => {
      getCategoryList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const createProduct = (e) => {
      e.preventDefault();

      if (name && price && category && explain && imageSrc) {
         const newProduct = {
            file: imageSrc.name,
            name,
            price,
            category,
            isAvalible: true,
            describtion: explain,
         };

         addRequest(newProduct, emptyInputs, getProductsList);
      } else {
         toast.error("لطفا تمام آیتم ها را پر کنید.", {
            theme: "colored",
            rtl: true,
         });
      }
   };

   const emptyInputs = () => {
      setName("");
      setPrice("");
      setCategory("");
      setExplain("");
      setImageSrc("");
      onHide();
   };

   return (
      <Modal show={show} onHide={emptyInputs} centered>
         <Title>اضافه کردن محصول جدید</Title>
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
            <Item>
               <Label>عکس :</Label>
               <InputFile type="file" accept="image/*" onChange={(e) => setImageSrc(e.target.files[0])} />
            </Item>

            <BtnGroup>
               <CancelBtn type="button" onClick={emptyInputs}>
                  انصراف
               </CancelBtn>
               {loading ? <LoadingBtn /> : <AddBtn type="submit">اضافه کردن</AddBtn>}
            </BtnGroup>
         </Box>
      </Modal>
   );
};

export default AddModal;

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
