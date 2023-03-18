import React, { useEffect } from "react";
import styled from "styled-components";
import ProductItem from "../../components/shared/ProductItem/ProductItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAllProducts from "../../api/allProducts/useAllProducts";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
   const [getProductsList, productsList, loading] = useAllProducts();

   useEffect(() => {
      getProductsList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Wrapper>
         {loading ? (
            <Spinner animation="border" variant="dark" />
         ) : (
            <Row>
               {productsList.map((product) => (
                  <Col xs={6} key={product.id}>
                     <ProductItem
                        category={product.category}
                        describtion={product.describtion}
                        imageSrc={product.file}
                        isAvalible={product.isAvalible}
                        name={product.name}
                        price={product.price}
                        productId={product.id}
                     />
                  </Col>
               ))}
            </Row>
         )}
      </Wrapper>
   );
};

export default Home;

const Wrapper = styled.section`
   margin: 0 12rem;
   margin-top: 3rem;
   background-color: var(--secondary-color);
   padding: 1.5rem;
   text-align: center;
`;
