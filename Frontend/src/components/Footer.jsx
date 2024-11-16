import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styled from "styled-components";
import payment2 from "/image/payment2.png";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  background-color: #eaeaf5;
  height: 40vh;
  /* flex-direction: column; */
  padding: 20px;
  ${mobile({ flexDirection: "column", height: "110vh" })}
`;

// Left part
const Left = styled.div`
  flex: 1;
  margin-right: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Logo = styled.h2``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
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
// Center part
const Center = styled.div`
  flex: 1;
  margin: 0 20px;
  ${mobile({ textAlign: "center", margin: "20px 0" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

// Right Part
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 20px;
`;
const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 20px;
`;
const Payment = styled.img`
  width: 150px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Accounts</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Hanuman Nagar, P.O/P.S : Mohiuddin Nagar 848502
        </ContactItem>

        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91 9525322661
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@yogesh.com
        </ContactItem>

        <PaymentContainer>
          <Payment src={payment2} style={{ marginRight: "10px" }} />
        </PaymentContainer>
      </Right>
    </Container>
  );
};

export default Footer;
