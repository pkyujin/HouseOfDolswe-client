import { useState } from "react";
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
const OptionButton = styled.button<{ selected: boolean }>`
  width: 100%;
  height: 5vh;
  background-color: ${({ selected }) => (selected ? "#E6E9EB" : "white")};
  border-radius: 20px;
  border: 1px solid ${({ selected }) => (selected ? "#000" : "#BDBDBD")};
  margin-bottom: 2vh;
  font-size: 3.5vw;
`

export default function CallPicker({ onSelectChange }: { onSelectChange: (value: string[]) => void }) {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  const toggleSelect = (value: string) => {
    setSelectedList(prev => {
      const updated = prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value];

      onSelectChange(updated);   // 부모에게 전달
      return updated;
    });
  };

  return (
    <Container>
        <TitleBox>돌쇠의 전화</TitleBox>
        <OptionButton selected={selectedList.includes("택시")}
        onClick={() => toggleSelect("택시")}>🚕택시</OptionButton>
        <OptionButton selected={selectedList.includes("골목길")}
        onClick={() => toggleSelect("골목길")}>🌃골목길</OptionButton>
        <OptionButton selected={selectedList.includes("대면 거래")}
        onClick={() => toggleSelect("대면 거래")}>🥕대면 거래</OptionButton>
        <OptionButton selected={selectedList.includes("집 가고 싶을 때")}
        onClick={() => toggleSelect("집 가고 싶을 때")}>😮‍💨집 가고싶을 때</OptionButton>
       
    </Container>
  );
}
