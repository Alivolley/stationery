import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
   const [searchValue, setSearchValue] = useState("");

   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      navigate(`/search/${searchValue}`);
   };

   return (
      <Wrapper onSubmit={submitHandler}>
         <Input type="text" placeholder="جست و جو ..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
         <IconHolder>
            <BsSearch />
         </IconHolder>
      </Wrapper>
   );
};

export default SearchBar;

const Wrapper = styled.form`
   display: flex;
   align-items: center;
   height: 3.5rem;
   border: 1px solid black;
   border-radius: 0.5rem;
   overflow: hidden;
`;

const Input = styled.input`
   border: none;
   outline: none;
   padding: 0 2rem;
   direction: rtl;
   font-size: 1.4rem;
`;

const IconHolder = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   border: none;
   outline: none;
   border-left: 0.1rem solid black;
   width: 3.5rem;
   background-color: var(--purple-color);
   color: white;
   font-size: 1.5rem;
   transition: all 0.2s;
   cursor: pointer;

   &:hover {
      opacity: 0.7;
   }
`;
