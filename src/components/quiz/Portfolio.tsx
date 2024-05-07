import styled from "@emotion/styled";
import theme from "../../styles/theme";
import UploadFile from "./UploadFile";
import { useRecoilValue } from "recoil";
import { fileState } from "../../atoms/fileAtom";
import toast from "react-hot-toast";

const Portfolio = () => {
  const fileName = useRecoilValue(fileState);

  const handleClick = () => {
    if (!fileName) {
      toast.error("이력서 및 포트폴리오를 업로드해주세요.");
    }
  };
  return (
    <Container>
      <Title>이력서 및 포트폴리오 업로드</Title>
      <UploadFile />
      <QuizButton onClick={handleClick}>퀴즈 풀러가기</QuizButton>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  margin-top: 3rem;
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
