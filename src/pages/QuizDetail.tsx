import styled from "@emotion/styled";
import theme from "../styles/theme";
import { useParams } from "react-router-dom";
import category from "../constants/category";
import DetailInput from "../components/quizDetail/DetailInput";
import CheckLevel from "../components/quizDetail/CheckLevel";
import SubmitButton from "../components/quizDetail/SubmitButton";

const QuizDetail = () => {
  const paramsId = useParams().id;
  const categoryName = category.find((item) => item.id === paramsId)?.name;
  return (
    <Container>
      <TextContainer>
        <TextInnerContainer>
          <CategoryName>{categoryName}</CategoryName>
          <Text>를 선택하셨습니다.</Text>
        </TextInnerContainer>
      </TextContainer>
      <BoxContainer>
        <DetailInput />
        <CheckLevel />
        <SubmitButton />
      </BoxContainer>
    </Container>
  );
};

export default QuizDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 8rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const TextInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.h1`
  margin-right: 0.5rem;
  color: ${theme.colors.green[700]};
`;

const Text = styled.p`
  font-size: 1.4rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
