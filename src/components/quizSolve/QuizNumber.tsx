import styled from "@emotion/styled";
import { TQuizProblem } from "../../types/QuizProblem";
import theme from "../../styles/theme";
import { answerState } from "../../atoms/answerAtom";
import { useRecoilValue } from "recoil";

type TQuizProps = {
  quiz: TQuizProblem[];
  questionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  selectedNumber: number;
};

const QuizNumber = ({ quiz, questionRefs, selectedNumber }: TQuizProps) => {
  const answer = useRecoilValue(answerState);

  const handleClick = (index: number) => {
    const questionElement = questionRefs.current[index - 1];
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isAnswered = (index: number) => {
    return answer[index + 1] !== undefined && answer[index + 1] !== "";
  };

  return (
    <Container>
      {quiz.map((_, index) => (
        <NumberContainer
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`${
            selectedNumber === index + 1
              ? "selected_number"
              : isAnswered(index)
              ? "answered"
              : ""
          }`}
        >
          {index + 1}
        </NumberContainer>
      ))}
    </Container>
  );
};

export default QuizNumber;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 20%;

  .selected_number {
    color: white;
    background-color: ${theme.colors.green[400]};
  }

  .answered {
    border: 1px solid ${theme.colors.green[100]};
    background-color: ${theme.colors.green[100]};
  }
`;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.green[400]};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${theme.colors.green[600]};
  border-radius: 0.25rem;
  margin: 0.25rem;
  cursor: pointer;
`;
