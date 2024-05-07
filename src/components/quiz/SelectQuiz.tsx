import styled from "@emotion/styled";
import theme from "../../styles/theme";
import QuizCategory from "./QuizCategory";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const SelectQuiz = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");

  const handleClick = () => {
    if (!categoryParams) {
      toast.error("반드시 1개를 선택해주세요");
    } else {
      navigate("/quiz/" + categoryParams);
    }
  };
  return (
    <Container>
      <Title>🥝 관심있는 퀴즈를 풀어보세요!</Title>
      <QuizCategory />
      <QuizButton onClick={handleClick}>퀴즈 풀러가기</QuizButton>
    </Container>
  );
};

export default SelectQuiz;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-top: 3rem;
  border-right: 1px solid ${theme.colors.gray[400]};
`;

const Title = styled.h2`
  color: ${theme.colors.green[800]};
`;

const QuizButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.6rem 10rem;
  margin: 3rem 0 2rem 0;
  background-color: ${theme.colors.green[300]};
  transition: all 0.25s ease-in-out;
  font-size: 1.1rem;
  color: white;

  &:hover {
    background-color: ${theme.colors.green[200]};
  }
`;
