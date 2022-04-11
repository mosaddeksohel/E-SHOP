import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  /* ${mobile({ flexDirection: "column" })} */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ui`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  padding: 20px;
`;

const ContactItem = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-SHOP</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          possimus accusantium, adipisci, esse mollitia, necessitatibus maxime
          illum rerum ipsum saepe corporis consectetur consequuntur officia
          deserunt ut nulla! Ratione rerum corrupti dolores repellat natus
          labore ipsum ab quo quidem? Nesciunt minus ex distinctio eum vero, ut
          vel nihil rerum maiores nostrum sint sapiente unde praesentium nisi
          repellendus harum obcaecati soluta incidunt rem mollitia. Explicabo
          perferendis omnis accusamus.{" "}
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>WomenFashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Term and Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationAltIcon />
          125/6, Dhaka, Bangladesh
        </ContactItem>
        <ContactItem>
          <PhoneIcon /> +880 1254846925
        </ContactItem>
        <ContactItem>
          <EmailIcon /> support@eshop.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
