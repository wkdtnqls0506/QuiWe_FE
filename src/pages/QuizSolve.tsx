import { mockData } from "../apis/mock";
import Timer from "../components/quizSolve/Timer";
import QuizNumber from "../components/quizSolve/QuizNumber";
import AnswerSubmitButton from "../components/quizSolve/AnswerSubmitButton";
import QuizProblem from "../components/quizSolve/QuizProblem";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const QuizSolve = () => {
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const questionTops = questionRefs.current.map((ref) =>
        ref ? ref.getBoundingClientRect().top : 0
      );

      const closestQuestionIndex = questionTops.reduce(
        (closestIndex, top, index) => {
          return Math.abs(top) < Math.abs(questionTops[closestIndex])
            ? index
            : closestIndex;
        },
        0
      );
      setSelectedNumber(closestQuestionIndex + 1);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <EtcContainer>
        <StickyContainer>
          <Timer />
          <QuizNumber
            quiz={mockData}
            questionRefs={questionRefs}
            selectedNumber={selectedNumber}
          />
          <AnswerSubmitButton answerLength={mockData.length} />
        </StickyContainer>
      </EtcContainer>
      <ProblemContainer>
        <QuizProblem quiz={mockData} questionRefs={questionRefs} />
      </ProblemContainer>
    </Container>
  );
};

export default QuizSolve;

const Container = styled.div`
  display: flex;
  gap: 5rem;
  padding: 2rem;
`;

const EtcContainer = styled.div`
  flex: 1;
`;

const StickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProblemContainer = styled.div`
  flex: 3;
`;
