import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import { AiOutlineUser } from "react-icons/ai";
import Categories from "./Categories/Categories";

const Header = () => {
   return (
      <Wrapper>
         <HeaderWrapper>
            <HeaderLeftSide>
               <Logo>Stationery</Logo>
               <SearchBar />
            </HeaderLeftSide>
            <HeaderRightSide>
               <Categories />
               <LoginBtn>
                  <AiOutlineUser />
                  ورود / ثبت نام
               </LoginBtn>
            </HeaderRightSide>
         </HeaderWrapper>
         <hr style={{ marginTop: 30 }} />
      </Wrapper>
   );
};

export default Header;

const Wrapper = styled.div`
   margin: 0 12rem;
   margin-top: 3rem;
`;

const HeaderWrapper = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const HeaderLeftSide = styled.div`
   display: flex;
   align-items: center;
   gap: 5rem;
`;

const HeaderRightSide = styled.div`
   display: flex;
   align-items: center;
   gap: 5rem;
`;

const Logo = styled.h2`
   font-family: cursive !important;
   letter-spacing: 0.6rem;
`;

const LoginBtn = styled.button`
   display: flex;
   align-items: center;
   gap: 0.7rem;
   font-size: 1.4rem;
   background-color: var(--purple-color);
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

const LogoutBtn = styled.button``;

const DashboardBtn = styled.button``;
