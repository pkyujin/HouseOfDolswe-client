import { useEffect } from "react";
import styled from "styled-components";
import useLoading from "../hooks/useLoading";
import Spinner from "../../public/loadingSpinner.gif";

const Container = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const SpinnerImg = styled.img`
  width: 10vw;
`;


export default function AudioPage() {
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
    <Container>
      {isLoading ? <SpinnerImg src={Spinner} alt="Loading"/> : <p>메인 화면</p>}
    </Container>
  );
}