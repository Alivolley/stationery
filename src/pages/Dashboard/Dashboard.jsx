import React from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

const Dashboard = () => {
   return (
      <Wrapper>
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
      </Wrapper>
   );
};

export default Dashboard;

const Wrapper = styled.div`
   margin: 0 12rem;
   direction: rtl;
`;

const Image = styled.img``;

const Options = styled.div``;

const DeleteBtn = styled.button``;

const EditBtn = styled.button``;
