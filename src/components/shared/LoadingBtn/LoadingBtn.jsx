import React from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

const LoadingBtn = () => {
   return (
      <Wrapper>
         <Spinner animation="border" variant="light" />
      </Wrapper>
   );
};

export default LoadingBtn;

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: var(--purple-color);
   width: 100%;
   border-radius: 0.5rem;
   padding: 0.7rem;
`;
