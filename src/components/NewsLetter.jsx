import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div;
const Title = styled.h1;
const Description = styled.div;
const InputContainer = styled.div;
const Input = styled.input;
const Button = styled.button;

const NewsLetter = () => {
  return (
    <Container>
      <Title></Title>
      <Description></Description>
      <InputContainer>
        <Input />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
