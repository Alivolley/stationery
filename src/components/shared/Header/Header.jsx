import React, { useContext } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import { AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Categories from "./Categories/Categories";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import ReloadContext from "../../../context/ReloadContext";

const Header = () => {
   const appReload = useContext(ReloadContext);
   const isLogedIn = Cookies.get("login");
   const isAdmin = Cookies.get("role");

   const logOut = () => {
      Cookies.remove("username");
      Cookies.remove("role");
      Cookies.remove("login");
      appReload();
   };

   return (
      <Wrapper>
         <HeaderWrapper>
            <HeaderLeftSide>
               <Logo to="/">Stationery</Logo>
               {isLogedIn && (
                  <BasketBtn to="/basket">
                     <SlBasket />
                  </BasketBtn>
               )}
               <SearchBar />
            </HeaderLeftSide>
            <HeaderRightSide>
               <Categories />
               {isAdmin === "admin" && <DashboardBtn to="/dashboard">داشبورد</DashboardBtn>}
               {isLogedIn ? (
                  <LogoutBtn to="/login" onClick={logOut}>
                     خروج از حساب
                  </LogoutBtn>
               ) : (
                  <LoginBtn to="/login">
                     <AiOutlineUser />
                     ورود / ثبت نام
                  </LoginBtn>
               )}
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
   gap: 2rem;
`;

const HeaderRightSide = styled.div`
   display: flex;
   align-items: center;
   gap: 3rem;
`;

const Logo = styled(Link)`
   font-family: cursive !important;
   letter-spacing: 0.6rem;
   font-size: 2.2rem;
   text-decoration: none;
   color: black;
`;

const LoginBtn = styled(Link)`
   text-decoration: none;
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

const LogoutBtn = styled.button`
   text-decoration: none;
   font-size: 1.4rem;
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

const DashboardBtn = styled(LoginBtn)``;

const BasketBtn = styled(LoginBtn)``;
