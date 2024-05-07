import { useState, DragEvent } from "react";
import styled from "@emotion/styled";
import { PiUploadBold } from "react-icons/pi";
import theme from "../../styles/theme";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { fileState } from "../../atoms/fileAtom";

const UploadFile = () => {
  const [isActive, setActive] = useState(false);
  const [fileName, setFileName] = useRecoilState(fileState);

  const handleDragEnter = () => setActive(true);

  const handleDragLeave = () => setActive(false);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type !== "application/pdf") {
      toast.error("pdf 형식의 파일만 업로드해주세요.");
    } else {
      setFileName(file.name);
      setActive(false);
    }
  };

  return (
    <ContainerLabel
      className={`preview${isActive ? " active" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <UploadInput type="file" accept=".pdf" />
      {!fileName ? (
        <>
          <PiUploadBold className="uploadIcon" />
          <Text1>파일을 이곳에 드롭해주세요.</Text1>
        </>
      ) : (
        <Text1>{fileName}</Text1>
      )}
    </ContainerLabel>
  );
};

const ContainerLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 25rem;
  margin-top: 2rem;
  border-radius: 5px;
  border: 3px dashed ${theme.colors.green[100]};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    border-color: ${theme.colors.green[200]};
  }

  &.active {
    background-color: ${theme.colors.gray[200]};
    border-color: ${theme.colors.gray[900]};
  }

  .uploadIcon {
    width: 6rem;
    height: 6rem;
    color: ${theme.colors.gray[500]};
  }
`;

const UploadInput = styled.input`
  display: none;

  &::file-selector-button {
    font-size: 0.875rem;
    background: white;
    border: 1px solid #111;
    border-radius: 12px;
    padding: 0.25rem 2rem;
    cursor: pointer;
  }
`;

const Text1 = styled.p`
  color: ${theme.colors.gray[800]};
  font-weight: 500;
  font-size: 1.125rem;
  margin: 1.25rem 0 0.625rem;
`;

export default UploadFile;
