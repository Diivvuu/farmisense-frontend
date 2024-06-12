import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Background = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("bg-pattern.jpg"); /* URL to your background image */
  background-repeat: repeat;
  background-size: 30% 30%;
  opacity: 0.3; /* Set the opacity here (0.0 to 1.0) */
`;
const Main = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
`;

export default function WithBackground({ children }) {
  return (
    <Container>
      <Background />
      <Main>{children}</Main>
    </Container>
  );
}
