import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const DetailInput = () => {
  const [inputText, setInputText] = useState("");
  const [textArr, setTextArr] = useState<string[]>([]);

  const handleDeleteClick = (index: number) => {
    setTextArr((prevArr) => prevArr.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      inputText !== "" &&
      e.key === "Enter" &&
      e.nativeEvent.isComposing === false
    ) {
      if (textArr.includes(inputText)) {
        toast("이미 등록된 주제입니다.", {
          icon: "🥝",
          position: "top-right",
          style: {
            padding: "1rem",
          },
        });
        return;
      }
      setTextArr((prevArr) => [...prevArr, inputText]);
      setInputText("");
      if (textArr.length >= 3) {
        setTextArr((prevArr) => prevArr.slice(1));
      }
    }
  };

  return (
    <Container>
      <Title>세부 주제 또는 분야를 입력해주세요.</Title>
      <InputContainer>
        <Input
          type="text"
          required
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <InputLabel>1가지 주제씩 작성해주세요!</InputLabel>
        <Span></Span>
      </InputContainer>
      <TopicContainer>
        {textArr.map((topic, index) => (
          <Topic key={`${topic}-${index}`}>
            {topic}
            <IoClose
              className="closeIcon"
              onClick={() => handleDeleteClick(index)}
            />
          </Topic>
        ))}
      </TopicContainer>
    </Container>
  );
};

export default DetailInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border: 2px dashed ${theme.colors.green[200]};
`;

const Title = styled.p`
  color: ${theme.colors.green[800]};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
`;

const TopicContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4rem;
  margin-bottom: 1rem;
`;

const Topic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 33%;
  height: 80%;
  padding: 1rem;
  border-radius: 4px;
  background-color: ${theme.colors.green[100]};
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .closeIcon {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    color: ${theme.colors.gray[600]};
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 18.75rem;
  margin: 1.5rem 0 1.5rem 0;
`;

const Input = styled.input`
  font-size: 0.9375rem;
  color: ${theme.colors.gray[900]};
  width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.colors.gray[500]};
  padding-bottom: 0.625rem;
  padding-left: 0.625rem;
  position: relative;
  background: none;
  z-index: 5;

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
  }

  &:focus + label,
  &:valid + label {
    font-size: 1rem;
    bottom: 2.5rem;
    color: #666;
  }

  &:focus + span,
  &:valid + span {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  color: #aaa;
  left: 0.625rem;
  font-size: 0.9rem;
  bottom: 0.5rem;
  transition: all 0.2s;
`;

const Span = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0%;
  background-color: #666;
  width: 0;
  height: 0.125rem;
  border-radius: 2px;
  transition: 0.5s;
`;
