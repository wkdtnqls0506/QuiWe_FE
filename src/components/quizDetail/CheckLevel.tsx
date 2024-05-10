import styled from "@emotion/styled";
import level from "../../constants/level";
import theme from "../../styles/theme";

const CheckLevel = () => {
  return (
    <Container>
      {level.map((item) => (
        <RadioButtonLabel key={item.id} htmlFor={item.id}>
          <RadioButton type="radio" id={item.id} name="level" />
          <RadioName>{item.name}</RadioName>
        </RadioButtonLabel>
      ))}
    </Container>
  );
};

export default CheckLevel;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  height: 1rem;
  padding: 1rem;
`;

const RadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const RadioButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid ${theme.colors.green[100]};
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: ${theme.colors.green[200]};
    border: 3px solid white;
    box-shadow: 0 0 0 1.6px ${theme.colors.green[200]};
  }
`;

const RadioName = styled.p`
  margin-top: 0.13rem;
`;
