import React from "react";
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./Products";
const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading> {heading} </ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle> {product.name}</ProductTitle>
                <ProductDesc> {product.desc} </ProductDesc>
                <ProductPrice> {product.price} </ProductPrice>
                <Link to={product.buttonLink}>
                  <ProductButton> {product.button}
                    {product.buttonLabel}
                  </ProductButton> 
                </Link>

              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      
    </ProductsContainer>
  );
};

export default Products;