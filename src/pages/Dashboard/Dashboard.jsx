import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import AddModal from "../../components/shared/Modals/AddModal/AddModal";
import useAllProducts from "../../api/allProducts/useAllProducts";
import Spinner from "react-bootstrap/Spinner";
import DeleteModal from "../../components/shared/Modals/DeleteModal/DeleteModal";
import TableItem from "../../components/shared/TableItem/TableItem";
import EditModal from "../../components/shared/Modals/EditModal/EditModal";

const Dashboard = () => {
   const [showAddModal, setShowAddModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [showEditModal, setShowEditModal] = useState(false);
   const [chosenDeleteDetail, setChosenDeleteDetail] = useState({});
   const [chosenEditDetail, setChosenEditDetail] = useState({});

   const [getProductsList, productsList, loading] = useAllProducts();

   useEffect(() => {
      getProductsList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const deleteHandle = (product) => {
      setShowDeleteModal(true);
      setChosenDeleteDetail(product);
   };

   const editHandle = (product) => {
      setShowEditModal(true);
      setChosenEditDetail(product);
   };

   return (
      <Wrapper>
         <AddBtnGroup>
            <AddProductBtn onClick={() => setShowAddModal(true)}>اضافه کردن محصول جدید</AddProductBtn>
            <AddCategoryBtn>اضافه کردن دسته بندی جدید</AddCategoryBtn>
         </AddBtnGroup>
         {loading ? (
            <Spinner animation="border" variant="dark" />
         ) : (
            <Table striped bordered>
               <thead>
                  <tr>
                     <th>id</th>
                     <th>عکس</th>
                     <th>نام</th>
                     <th>دسته بندی</th>
                     <th>قیمت</th>
                     <th>گزینه ها</th>
                  </tr>
               </thead>
               <tbody>
                  {productsList.map((product) => (
                     <TableItem product={product} deleteHandle={deleteHandle} key={product.id} editHandle={editHandle} />
                  ))}
               </tbody>
            </Table>
         )}

         <AddModal show={showAddModal} onHide={() => setShowAddModal(false)} getProductsList={getProductsList} />
         <DeleteModal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} getProductsList={getProductsList} chosenDeleteDetail={chosenDeleteDetail} />
         <EditModal show={showEditModal} onHide={() => setShowEditModal(false)} getProductsList={getProductsList} chosenEditDetail={chosenEditDetail} />
      </Wrapper>
   );
};

export default Dashboard;

const Wrapper = styled.div`
   margin: 0 12rem;
   direction: rtl;
`;

const AddBtnGroup = styled.div`
   margin: 5rem 0;
   display: flex;
   gap: 2rem;
`;

const AddProductBtn = styled.button`
   background-color: var(--purple-color);
   font-size: 1.4rem;
   color: white;
   border: 0.2rem solid var(--purple-color);
   border-radius: 0.5rem;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
   transition: all 0.2s;

   &:hover {
      background-color: white;
      color: black;
   }
`;

const AddCategoryBtn = styled(AddProductBtn)``;
