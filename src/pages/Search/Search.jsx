import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import ProductItem from "../../components/shared/ProductItem/ProductItem";
import useSearch from "../../api/search/useSearch";
import styled from "styled-components";

const Search = () => {
   const { word } = useParams();

   const [getSearchList, productsList, loading] = useSearch();

   useEffect(() => {
      getSearchList(word);
   }, [word]);

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

export default Search;

const Wrapper = styled.section`
   margin: 0 12rem;
   margin-top: 3rem;
   background-color: var(--secondary-color);
   padding: 1.5rem;
   text-align: center;
`;
