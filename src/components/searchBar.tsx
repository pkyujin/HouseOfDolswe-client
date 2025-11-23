import styled from 'styled-components';
import SearchIcon from '../../public/searchIcon.svg';


const Container = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.7vw solid #EEEEEE;
  border-bottom: 0.7vw solid #F2F2F2;
`
const SearchWrapper = styled.div`
  width: 90%;
  height: 5.5vh;
  display: flex;
  align-items: center;
  background-color: #E6E9EB80;
  border-radius: 13px;
  padding: 0 2vw;  // 왼쪽/오른쪽 여백
`;

const SearchInput = styled.input`
  flex: 1;                  // 남은 공간 채우기
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 3.5vw;
  margin-left: 2vw;
`;

const IconBox = styled.img`
  width: 4.5vw;
  height: 4.5vh;
  margin-left: 6vw;
`;


export default function SearchBar() {

  return (
    <Container>
        <SearchWrapper>
            <IconBox src={SearchIcon} />
            <SearchInput placeholder="키워드를 검색하세요" />
        </SearchWrapper>
    </Container>
  );
}