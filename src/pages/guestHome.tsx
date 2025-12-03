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

const loginWithKakao = () => {
  if (!window.Kakao || !window.Kakao.Auth) {
    console.error("Kakao SDK not ready");
    return;
  }

  window.Kakao.Auth.login({
    scope: "profile_nickname",
    success: (authObj: any) => {
      console.log("카카오 로그인 성공:", authObj);
      // access_token 여기서 바로 사용 가능
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res: any) => console.log(res),
        fail: (err: any) => console.error(err),
      });
    },
    fail: (err: any) => {
      console.error("카카오 로그인 실패:", err);
    },
  });
};



export default function Home() {


  return (
    <Container>
        <LogoWrapper>
            <LogoImgWrapper>
                <LogoImg src={LogoWhite} alt="Logo Text White" />
            </LogoImgWrapper>
            <LogoText>언제 어디서든, 내 주머니 속 포켓 돌쇠</LogoText>
        </LogoWrapper>
      <LoginButton onClick={loginWithKakao}>
        카카오 로그인
      </LoginButton>
    </Container>
  );
}

