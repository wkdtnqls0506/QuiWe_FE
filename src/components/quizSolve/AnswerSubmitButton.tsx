import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { answerState } from "../../atoms/answerAtom";
import { useRecoilValue } from "recoil";
import toast from "react-hot-toast";

type TAnswerSubmitButtonProps = {
  answerLength: number;
};

const AnswerSubmitButton = ({ answerLength }: TAnswerSubmitButtonProps) => {
  const answer = useRecoilValue(answerState);

  const handleClick = () => {
    if (answerLength !== Object.keys(answer).length) {
      toast.error("모든 문제를 풀어주세요.");
      return;
    }
    for (const value of Object.values(answer)) {
      if (value === "") {
        toast.error("모든 문제를 풀어주세요.");
        return;
      }
    }
  };
  return <SubmitButton onClick={handleClick}>답안 제출하기</SubmitButton>;
};

export default AnswerSubmitButton;

const SubmitButton = styled.button`
  width: 14rem;
  padding: 0.8rem;
  border-radius: 0.25rem;
  background-color: ${theme.colors.green[100]};
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${theme.colors.green[200]};
  }
`;
