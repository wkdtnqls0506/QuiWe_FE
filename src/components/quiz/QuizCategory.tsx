import styled from "@emotion/styled";
import theme from "../../styles/theme";
import category from "../../constants/category";
import { useSearchParams } from "react-router-dom";

const QuizCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");

  const handleCategoryClick = (categoryId: string) => {
    searchParams.set("category", categoryId);
    setSearchParams(searchParams);
  };

  return (
    <CategoryContainer>
      {category.map((item) => (
        <Category
          className={`${categoryParams == item.id ? " selected_category" : ""}`}
          key={item.id}
          onClick={() => handleCategoryClick(item.id)}
        >
          {item.name}
        </Category>
      ))}
    </CategoryContainer>
  );
};

export default QuizCategory;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 6rem);
  grid-auto-rows: 6rem;
  gap: 2.5rem;
  margin-top: 2rem;

  .selected_category {
    cursor: pointer;
    background-color: ${theme.colors.green[300]};
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.green[100]};
  border-radius: 0.5rem;
  transition: all 0.25s ease-in-out;
  color: ${theme.colors.green[800]};
  font-weight: 700;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.green[300]};
  }
`;
