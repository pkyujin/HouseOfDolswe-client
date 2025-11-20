import styled from "styled-components";

const Container = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TitleBox = styled.div`
  font-weight: bold;
  font-size: 4vw;
  margin-bottom: 4vh;
`
const OptionButton = styled.button`
  width: 100%;
  height: 5vh;
  background-color: white; 
  border-radius: 20px;
  border: 1px solid #BDBDBD;
  margin-bottom: 2vh;
  font-size: 3.5vw;
`

export default function HousePicker() {
  return (
    <Container>
        <TitleBox>돌쇠의 집</TitleBox>
        <OptionButton>📦택배</OptionButton>
        <OptionButton>😋배달 음식</OptionButton>
        <OptionButton>🥕비대면 거래</OptionButton>
        <OptionButton>🔔초인종 소리</OptionButton>
       
    </Container>
  );
}
