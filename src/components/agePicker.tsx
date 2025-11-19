import Picker from "react-mobile-picker";
import styled from "styled-components";
import { useState } from "react";

interface AgePickerProps {
    onSelect?: (age: string | null) => void; // 값 선택하면 onboarding에 전달
}

export default function AgePicker({ onSelect }: AgePickerProps) {
  const [value, setValue] = useState<{ age: string }>({ age: "10대 이하" });
  const [hasInteracted, setHasInteracted] = useState(false); // 스크롤 시작 여부

  const ageList = [
    "10대 이하",
    "10대 초반",
    "10대 중반",
    "10대 후반",
    "20대 초반",
    "20대 중반",
    "20대 후반",
    "30대 초반",
    "30대 중반",
    "30대 후반",
    "40대 초반",
    "40대 중반",
    "40대 후반",
    "50대 초반",
    "50대 중반",
    "50대 후반",
    "60대 초반",
    "60대 중반",
    "60대 후반",
    "60대 이상",
  ];

  // Picker가 value를 변경할 때 호출되는 핸들러
  const handleChange = (newValue: { age: string }) => {
    if (!hasInteracted) setHasInteracted(true); // 최초 상호작용 시 true로
    setValue(newValue);
    onSelect?.(newValue.age);
  };

  return (
    <Picker value={value} onChange={handleChange} height={150} itemHeight={40}>
      <Picker.Column name="age">
        {ageList.map((item) => (
          <StyledItem
            key={item}
            value={item}
            selected={hasInteracted ? value.age === item : false} // 상호작용 후에만 selected 효과
          >
            {item}
          </StyledItem>
        ))}
      </Picker.Column>
    </Picker>
  );
}

const StyledItem = styled(Picker.Item)<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? "1.6rem" : "1.2rem")};
  font-weight: 700;
  color: ${(props) => (props.selected ? "#000" : "#AFAFAF")};
  transition: all 0.25s ease;
`;
