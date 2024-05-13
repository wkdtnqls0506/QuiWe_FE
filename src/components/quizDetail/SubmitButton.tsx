import styled from "@emotion/styled";
import theme from "../../styles/theme";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SubmitButton = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const detailParams = searchParams.get("detail");
  const levelParams = searchParams.get("level");

  const handleClick = () => {
    if (!detailParams || !levelParams) {
      toast.error("세부 주제와 레벨을 반드시 선택해주세요!");
    } else {
      navigate("/quizSolve");
    }
  };
  return <Button onClick={handleClick}>제출하고 퀴즈 풀러가기</Button>;
};

export default SubmitButton;

const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  background-color: ${theme.colors.green[100]};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${theme.colors.green[200]};
  }
`;
