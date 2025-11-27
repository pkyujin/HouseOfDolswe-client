import { useEffect, useState } from "react";
import styled from "styled-components";
import useLoading from "../hooks/useLoading";
import Header from "../components/header";
import Footer from "../components/footer";
import AudioItem from "../components/audioItem";
import SearchBar from "../components/searchBar";
import Spinner from "../../public/loadingSpinner.gif";


const LoadingContainer = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div `
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const SpinnerImg = styled.img`
  width: 10vw;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 7vw;
  height: 6vh;
`;

const CategoryItem = styled.p<{ active: boolean }>`
  background-color: #ffffff;
  color: ${(props) => (props.active ? "#000000" : "#616161")};
  font-size: 4vw;
  font-weight: bold;
  padding-bottom: 3.8vh;
  border-bottom: 0.6vh solid ${(props) => (props.active ? "#000000" : "none")};
  z-index: 100;
`;

interface AudioData {
  id: number,
  title: string;
  name: string;
  tags: string[];
}

export default function AudioPage() {
  const audioMockData: AudioData[] = [
  {
    id: 1,
    title: "누구세요?",
    name: "장춘배",
    tags: ["택배", "배달", "당근"],
  },
  {
    id:2,
    title: "네~ 문 앞에 두고 가세요",
    name: "장춘배",
    tags: ["택배", "배달", "당근"],
  },
  {
    id:3,
    title: "문 앞에 있는 거 가져가시면 돼요",
    name: "김OO",
    tags: ["택배", "배달", "당근"],
  },
  {
    id:4,
    title: "제가 지금 씻고 있어서요~",
    name: "김OO",
    tags: ["택배", "배달", "당근"],
  },
  {
    id:5,
    title: "지금 못 나가요",
    name: "슈퍼톤AI - VoiceA",
    tags: ["택시", "골목길", "당근"],
  },{
    id:6,
    title: "네~",
    name: "슈퍼톤AI - VoiceB",
    tags: ["택시", "골목길", "당근"],
  },{
    id:7,
    title: "아니요~",
    name: "슈퍼톤AI - VoiceB",
    tags: ["택시", "배달", "당근"],
  }
];

  const [search, setSearch] = useState("");
  type CategoryType = "문 앞(택배,배달)" | "귀가(택시,골목길)" | "즐겨찾기";
  const [category, setCategory] = useState<CategoryType>("문 앞(택배,배달)");

  /** 오디오 아이템 선택 */
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const [bookmarks, setBookmarks] = useState<number[]>([]);

  const handleToggleBookmark = (id: number) => {
  setBookmarks(prev =>
    prev.includes(id)
      ? prev.filter(b => b !== id) // 이미 있으면 제거
      : [...prev, id]              // 없으면 추가
  );
};

  const categoryFiltered = audioMockData.filter((item) => {
  const has문앞 = item.tags.some(t => t.includes("택배") || t.includes("배달"));
  const has귀가 = item.tags.some(t => t.includes("택시") || t.includes("골목길"));

  if (category === "문 앞(택배,배달)") return has문앞;
  if (category === "귀가(택시,골목길)") return has귀가;
  if (category === "즐겨찾기") return bookmarks.includes(item.id);

  return true;
  });


  const filteredData = categoryFiltered.filter(
    (item) =>
      item.title.includes(search) ||
      item.name.includes(search) ||
      item.tags.some((tag) => tag.includes(search))
  );


  const { isLoading, stopLoading } = useLoading(true); 

  useEffect(() => {
    async function loadAudioData() {
      try {
        // 1초 동안 로딩
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(error);
      } finally {
        stopLoading();
      }
    }

    loadAudioData();
  }, []);



  return (
    <>
      {isLoading ?
      <LoadingContainer>
        <SpinnerImg src={Spinner} alt="Loading"/>
      </LoadingContainer>
      :
      <Container>
        <Header />
        <CategoryWrapper>
          {(["문 앞(택배,배달)", "귀가(택시,골목길)", "즐겨찾기"] as CategoryType[]).map(
            (cat) => (
              <CategoryItem
                key={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </CategoryItem>
            )
          )}
        </CategoryWrapper>

        <SearchBar search={search} setSearch={setSearch} />
          
          {filteredData.map((item) => (
  <AudioItem
    key={item.id}
    id={item.id}
    title={item.title}
    name={item.name}
    tags={item.tags}
    selected={selectedIndex === item.id}
    disabled={selectedIndex !== null && selectedIndex !== item.id}
    onSelect={() => handleSelect(item.id)}
    onToggleBookmark={handleToggleBookmark}
    isBookmarked={bookmarks.includes(item.id)}
  />
))}

          <Footer />
        </Container>}
    </>
  );
}