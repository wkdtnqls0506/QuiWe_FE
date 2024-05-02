import styled from "@emotion/styled";
import Logo from "../../assets/logo.svg?react";
import { Link, useLocation } from "react-router-dom";
import theme from "../../styles/theme";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <Container>
      <Link to="/">
        <Logo width="9.375rem" />
      </Link>
      <CategoryContainer>
        <Link to="/quiz">
          <CategoryName
            className={`chat ${
              pathName === "/quiz" ? "selected_category" : ""
            }`}
          >
            퀴즈
          </CategoryName>
        </Link>
        <Link to="/mypage">
          <CategoryName
            className={`chat ${
              pathName === "/mypage" ? "selected_category" : ""
            }`}
          >
            마이페이지
          </CategoryName>
        </Link>
      </CategoryContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1rem;
  border-bottom: 1px solid ${theme.colors.gray[300]};
`;

const CategoryContainer = styled.div`
  display: flex;

  .selected_category {
    border-radius: 0.5rem;
    background-color: ${theme.colors.green[100]};
  }
`;

const CategoryName = styled.p`
  margin-left: 0.5rem;
  font-size: 1.1rem;
  color: ${theme.colors.green[700]};
  padding: 0.5rem 1rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    border-radius: 0.5rem;
    background-color: ${theme.colors.green[100]};
  }
`;
