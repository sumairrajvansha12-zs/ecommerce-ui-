import {
  CallOutlined,
  Facebook,
  Instagram,
  MailOutline,
  Pinterest,
  RoomOutlined,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color}; // id diye toh dikhra nahi toh nahi dikhra
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  list-style: none;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

const Payment = styled.img`
  display: flex;
  height: 40px;
  width: 40px;
  object-fit: contain;
  flex-direction: column;
  margin-right: 20px;
`;

const PaymentWrap = styled.div`
  display: flex;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA</Logo>
        <Description>
          Sándor Vay (1859–1918) was a Hungarian poet and journalist. Born as a
          female named Sarolta, Vay was one of the first Hungarian women to
          complete university studies. Vay then began identifying as a male
          journalist, both before and after the sensational trial for his
          marriage to another woman in 1889. The case drew the attention of
          noted sexologists of the period, including Havelock Ellis and Richard
          von Krafft-Ebing, who used it to explore female inversion in the
          emerging field of sexology.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F ">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links </Title>
        <List></List>
        <ListItem>Home </ListItem>
        <ListItem> Cart</ListItem>
        <ListItem>Man Fashion </ListItem>
        <ListItem>Woman Fashion </ListItem>
        <ListItem> Accessories</ListItem>
        <ListItem> My Account</ListItem>
        <ListItem> Order tracking</ListItem>
        <ListItem>Wishlist </ListItem>
        <ListItem> Terms</ListItem>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          <RoomOutlined style={{marginRight:20}}/>
          33/A, Ananya, Telecom Colony, Nt Layout, Mysore Road, Mysore Road,
          Bengaluru, Karnataka 560026
        </ContactItem>
        <ContactItem>
          <CallOutlined style={{marginRight:20}}/>
          +919876543210
        </ContactItem>

        <ContactItem>
          <MailOutline style={{marginRight:20}}/>
          contact@1234.com
        </ContactItem>
        <PaymentWrap>
          <Payment
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
            alt=""
          />
          <Payment
            src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"
            alt=""
          />
          <Payment
            src="https://w7.pngwing.com/pngs/314/877/png-transparent-visa-logo-credit-card-debit-card-mastercard-logo-visa-go-blue-text-trademark.png"
            alt=""
          />
          <Payment
            src="https://assets.stickpng.com/images/627ccea41b2e263b45696abd.png"
            alt=""
          />
        </PaymentWrap>
      </Right>
    </Container>
  );
};
export default Footer;
