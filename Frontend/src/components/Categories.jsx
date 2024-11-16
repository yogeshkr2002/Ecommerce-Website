import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* background-color: #c6c6e2; */
  ${mobile({ padding: "0", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item, index) => (
          <CategoryItem item={item} key={index} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
