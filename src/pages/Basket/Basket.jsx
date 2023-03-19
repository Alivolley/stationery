import React, { useEffect } from "react";
import styled from "styled-components";
import BasketItem from "../../components/shared/BasketItem/BasketItem";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAllBasket from "../../api/getAllBasket/useAllBasket";

const Basket = () => {
   const [getBasketList, basketList, loading] = useAllBasket();

   useEffect(() => {
      getBasketList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Wrapper>
         {loading ? (
            <Spinner animation="border" variant="dark" />
         ) : (
            <Row>
               {basketList.map((product) => (
                  <Col xs={6} key={product.id}>
                     <BasketItem
                        imageSrc={product.file}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        isAvalible={product.isAvalible}
                        describtion={product.describtion}
                        isInBasket={product.isInBasket}
                        productId={product.id}
                        getBasketList={getBasketList}
                     />
                  </Col>
               ))}
            </Row>
         )}
      </Wrapper>
   );
};

export default Basket;

const Wrapper = styled.section`
   margin: 0 12rem;
   margin-top: 3rem;
   background-color: var(--secondary-color);
   padding: 1.5rem;
   text-align: center;
`;
