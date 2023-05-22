import { SendOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Button = styled.button`
  flex: 1; // 1fr ke jaise kaam karta yeh
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer; 
`;
const Input = styled.input`
  border: none;
  flex: 8; // 1fr ke jaise kaam karta yeh
  padding-left: 20px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products!!!
      </Description>
      <InputContainer>
        <Input placeholder="Your mail..." />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};
export default Newsletter;
