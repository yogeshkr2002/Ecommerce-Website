import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import { mobile } from "../Responsive.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #e6eadf;
  /* @media only screen and (max-width: 418px) {
    display: none;
  } */

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`;

// Left part
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  margin: 0 15px;
  padding: 5px;
  //   border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  background-color: #e6eadf;
  /* background-color: #f0f3da; */
  ${mobile({ width: "50px" })}
`;

// Center Part
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  color: Black;
  ${mobile({ fontSize: "20px" })}
`;

// Right Part
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // const cart = useSelector((state) => state.cart);
  // console.log(cart);

  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>English</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LAMA.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to={"/cart"}>
              <MenuItem>
                <IconButton aria-label="cart">
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
