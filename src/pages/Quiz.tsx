import styled from "@emotion/styled";
import SelectQuiz from "../components/quiz/SelectQuiz";
import Portfolio from "../components/quiz/Portfolio";

const Quiz = () => {
  return (
    <Container>
      <SelectQuiz />
      <Portfolio />
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  display: flex;
`;
