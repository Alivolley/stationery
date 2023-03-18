import React, { useState } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import AddModal from "../../components/shared/Modals/AddModal/AddModal";

const Dashboard = () => {
   const [showAddModal, setShowAddModal] = useState(false);

   return (
      <Wrapper>
         <AddBtnGroup>
            <AddProductBtn onClick={() => setShowAddModal(true)}>اضافه کردن محصول جدید</AddProductBtn>
            <AddCategoryBtn>اضافه کردن دسته بندی جدید</AddCategoryBtn>
         </AddBtnGroup>
         <Table striped bordered>
            <thead>
               <tr>
                  <th>id</th>
                  <th>عکس</th>
                  <th>نام</th>
                  <th>قیمت</th>
                  <th>گزینه ها</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>
                     <Image />
                  </td>
                  <td>Otto</td>
                  <td>@mdo</td>

                  <td>
                     <Options>
                        <DeleteBtn>حذف</DeleteBtn>
                        <EditBtn>ویرایش</EditBtn>
                     </Options>
                  </td>
               </tr>
            </tbody>
         </Table>

         <AddModal show={showAddModal} onHide={() => setShowAddModal(false)}></AddModal>
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

const Image = styled.img``;

const Options = styled.div`
   display: flex;
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
