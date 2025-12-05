import styled from "styled-components";
import { useState } from "react";

interface SignOutModalProps {
  onClose: () => void;
}

export default function SignOutModal({ onClose }: SignOutModalProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalBox>
        <Header>
          <Title>계정 탈퇴</Title>
        </Header>
        <Content>
          돌쇠의 집을 사용해주셔서 감사합니다.<br />탈퇴 사유를 알려주세요.
        </Content>
        <TextButtonWrapper>
            <TextButton 
            selected={selected === "hard"}
            onClick={() => setSelected("hard")}>
              사용법이 어려워요
            </TextButton>
            <TextButton
            selected={selected === "unused"}
            onClick={() => setSelected("unused")}>
              생각보다 잘 사용하지 않아요
            </TextButton>
            <TextButton
            selected={selected === "different"}
            onClick={() => setSelected("different")}>
              기대했던 것과 달라요
            </TextButton>
            <TextButton
            selected={selected === "error"}
            onClick={() => setSelected("error")}>
              앱에서 오류가 발생해요
            </TextButton>
            <TextButton
            selected={selected === "etc"}
            onClick={() => setSelected("etc")}>
              기타
            </TextButton>
        </TextButtonWrapper>
        <ButtonWrapper>
            <SignOutButton disabled={!selected}>
               탈퇴하기
            </SignOutButton>
            <CancelButton onClick={onClose}>
               돌아가기
            </CancelButton>
        </ButtonWrapper>
      </ModalBox>
    </Backdrop>
  );
}


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: 75%;
  padding: 3vh 7.5vw;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6vw;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Title = styled.h3`
  margin: 0;
  font-size: 4vw;
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  font-size: 3.5vw;
  color: #000000;
  text-align:center;
`;

const TextButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
`;

const TextButton = styled.button<{ selected: boolean }>`
  width: 64vw;
  height: 5.5vh;
  display: flex;
  align-items: center;
  padding-left: 5vw;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#000000" : "#FFFFFF")};
  border: 0.2vh solid ${({ selected }) => (selected ? "none" : "#DFE4EB")};
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#000000")};
  font-size: 3.5vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  margin: 0.5vh;
`;

const SignOutButton = styled.button<{disabled?: boolean}>`
  width: 31vw;
  height: 4.5vh;
  background-color: ${({ disabled }) => (disabled ? "#E6E9EB" : "#000000")};
  border-radius: 10px;
  font-size: 3.2vw;
  color: ${({ disabled }) => (disabled ? "#B0BABF" : "#FFFFFF")};
  border: none;
`;

const CancelButton = styled.button`
  width: 31vw;
  height: 4.5vh;
  background-color: #A304FF;
  border-radius: 10px;
  font-size: 3.2vw;
  border: none;
  color: #FFFFFF;
`;
