import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const Warpper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.option``;
const FilterTitle = styled.h1``;
const FilterColor = styled.div``;
const FilterSize = styled.select``;
const FilterSizeOption = styled.option``;

const Product = () => {
  return (
    <Container>
      <Navigation />
      <Announcement />
      <Warpper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minus
            nostrum dolorem atque sunt tempora nam perspiciatis esse error ex?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ullam eius qui consequatur veniam nesciunt nobis dolore quasi odit
            voluptatem!
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkbule" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Warpper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
