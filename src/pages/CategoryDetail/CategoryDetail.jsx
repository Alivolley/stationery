import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetCategory from "../../api/getCategory/useGetCategory";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import ProductItem from "../../components/shared/ProductItem/ProductItem";

const CategoryDetail = () => {
   const { id } = useParams();
   const [getCategoryDetail, mainCategoryList, loading] = useGetCategory(id);

   useEffect(() => {
      getCategoryDetail();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id]);

   return (
      <Wrapper>
         {loading ? (
            <Spinner animation="border" variant="dark" />
         ) : (
            <Row>
               {mainCategoryList.map((product) => (
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

export default CategoryDetail;

const Wrapper = styled.section`
   margin: 0 12rem;
   margin-top: 3rem;
   background-color: var(--secondary-color);
   padding: 1.5rem;
   text-align: center;
`;
