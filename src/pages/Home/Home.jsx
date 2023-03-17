import React from "react";
import styled from "styled-components";
import ProductItem from "../../components/shared/ProductItem/ProductItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
   return (
      <Wrapper>
         <Row>
            <Col xs={6}>
               <ProductItem />
            </Col>
            <Col xs={6}>
               <ProductItem />
            </Col>
            <Col xs={6}>
               <ProductItem />
            </Col>
            <Col xs={6}>
               <ProductItem />
            </Col>
            <Col xs={6}>
               <ProductItem />
            </Col>
         </Row>
      </Wrapper>
   );
};

export default Home;

const Wrapper = styled.section`
   margin: 0 12rem;
   margin-top: 3rem;
   background-color: var(--secondary-color);
   padding: 1.5rem;
`;
