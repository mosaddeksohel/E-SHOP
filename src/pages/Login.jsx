import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahYztqJn-1cjF8_3FztlqjHyyMrQn7AYtkQ&usqp=CAU")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  align-items: center;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Signin</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>Login</Button>
          <Link>DO NOT REMEMBER THE PASSWORD</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
