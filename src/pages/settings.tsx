import Footer from "../components/footer";
import styled from "styled-components";

const FooterWrapper = styled.div`
  margin-top: auto;
`;

export default function Settings() {
  return (
    <>
       설정 페이지
       <FooterWrapper>
         <Footer />
       </FooterWrapper>
    </>
  );
}
