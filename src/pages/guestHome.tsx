import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../../public/logoWhite.svg";


const Container = styled.div `
  background: linear-gradient(#626262, #000000);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImgWrapper = styled.div`
`;

const LogoImg = styled.img`
  width: 50vw;
  height: auto;
  display: block; 
  margin: -5px;
`;

const LogoText = styled.p`
  color: white;
  font-size: 3.3vw;
`;

const LoginButton = styled.button`
  width: 80vw;
  padding: 3vw;
  border-radius: 15px;
  position: absolute;
  bottom: 7vh;
`;

export default function Home() {
  const navigate = useNavigate();



  return (
    <Container>
        <LogoWrapper>
            <LogoImgWrapper>
                <LogoImg src={LogoWhite} alt="Logo Text White" />
            </LogoImgWrapper>
            <LogoText>언제 어디서든, 내 주머니 속 포켓 돌쇠</LogoText>
        </LogoWrapper>
      <LoginButton onClick={() => navigate("/onboarding")}>
        카카오 로그인
      </LoginButton>
    </Container>
  );
}

