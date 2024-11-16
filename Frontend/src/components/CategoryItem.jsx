import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #c6e2d9;
  flex: 1;
  border: 2px solid black;
  margin: 3px;
  height: 60vh;
  position: relative;
  /* object-fit: cover; */
`;

const Image = styled.img`
  /* width: 70%; */
  height: 100%;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Btn>SHOP NOW</Btn>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
