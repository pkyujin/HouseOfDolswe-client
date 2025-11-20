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
  color: black;
  border-radius: 20px;
  border: 1px solid ${({ selected }) => (selected ? "#000" : "#BDBDBD")};
  margin-bottom: 2vh;
  font-size: 3.5vw;
`

export default function HousePicker({ onSelectChange }: { onSelectChange: (value: string[]) => void }) {
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
        <TitleBox>돌쇠의 집</TitleBox>
        <OptionButton selected={selectedList.includes("택배")}
        onClick={() => toggleSelect("택배")}>📦택배</OptionButton>
        <OptionButton selected={selectedList.includes("배달")}
        onClick={() => toggleSelect("배달")}>😋배달 음식</OptionButton>
        <OptionButton selected={selectedList.includes("비대면 거래")}
        onClick={() => toggleSelect("비대면 거래")}>🥕비대면 거래</OptionButton>
        <OptionButton selected={selectedList.includes("초인종")}
        onClick={() => toggleSelect("초인종")}>🔔초인종 소리</OptionButton>
    </Container>
  );
}
