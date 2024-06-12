import styled from "styled-components";
import Branding from "./Branding";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--color2);

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  height: 100vh;
  width: 32vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--translucentInteraction);
  gap: 20px;

  @media (max-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const RightSection = styled.div`
  width: 68vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;
const HeroImage = styled.img`
  width: 60vw;
`;

export default function AuthPageBase({ children }) {
  return (
    <Container>
      <LeftSection>
        <Branding />
        <Inputs>{children}</Inputs>
      </LeftSection>
      <RightSection>
        <HeroImage src="/hero-image8.png" />
      </RightSection>
    </Container>
  );
}
