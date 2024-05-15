import styled from "@emotion/styled";
import { TQuizProblem } from "../../types/QuizProblem";
import theme from "../../styles/theme";
import { answerState } from "../../atoms/answerAtom";
import { useRecoilState } from "recoil";

type TQuizProps = {
  quiz: TQuizProblem[];
  questionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

const QuizProblem = ({ quiz, questionRefs }: TQuizProps) => {
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(answerState);

  const handleClick = (questionNumber: number, optionNumber: number) => {
    setSelectedAnswer((prevState) => ({
      ...prevState,
      [questionNumber]: optionNumber,
    }));
  };

  const handleInputChange = (
    questionNumber: number,
    event: React.ChangeEvent<HTMLInputElement | undefined>
  ) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionNumber]: event.target.value,
    }));
  };

  return (
    <>
      {quiz.map((item, questionIndex) => (
        <Container
          key={questionIndex}
          ref={(el) => (questionRefs.current[questionIndex] = el)}
        >
          <Question>{`${questionIndex + 1}. ${item.question}`}</Question>
          {item.type === "multiple-choice" ? (
            <MultipleChoiceContainer>
              {item.options?.map((option, optionIndex) => (
                <MultipleChoice
                  key={`${item.answer}_${optionIndex}`}
                  onClick={() =>
                    handleClick(questionIndex + 1, optionIndex + 1)
                  }
                  className={
                    selectedAnswer[questionIndex + 1] === optionIndex + 1
                      ? "selected_multiple"
                      : ""
                  }
                >
                  {`${optionIndex + 1}) ${option}`}
                </MultipleChoice>
              ))}
            </MultipleChoiceContainer>
          ) : (
            <AnswerContainer>
              <Input
                type="text"
                required
                placeholder="정답을 입력해주세요"
                onChange={(event) =>
                  handleInputChange(questionIndex + 1, event)
                }
              />
            </AnswerContainer>
          )}
        </Container>
      ))}
    </>
  );
};

export default QuizProblem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  padding: 1rem 0 2.5rem 1rem;
  border-bottom: 1px solid ${theme.colors.gray[400]};
`;

const Question = styled.h3`
  color: ${theme.colors.green[800]};
`;

const MultipleChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  width: 70%;

  .selected_multiple {
    background-color: ${theme.colors.green[100]};
    border-radius: 0.25rem;
  }
`;

const MultipleChoice = styled.p`
  cursor: pointer;
  padding: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${theme.colors.green[100]};
    border-radius: 0.25rem;
  }
`;

const AnswerContainer = styled.div`
  width: 70%;
  margin-left: 1.2rem;
  margin-top: 1.25rem;
`;

const Input = styled.input`
  font-size: 0.9375rem;
  color: ${theme.colors.gray[900]};
  width: 100%;
  border: none;
  border: 1px solid ${theme.colors.gray[500]};
  padding: 1rem;
  border-radius: 0.25rem;

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.green[700]};
  }
`;
