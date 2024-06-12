import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`

  0% {
    width: 30%;
    left: -30%;
  }
  70% {
    left: 100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }

`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LoaderParent = styled.div`
  background: var(--translucent);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  width: ${({ width }) => (width ? width : "300px")};
  height: 3px;
`;

const Loader = styled.div`
  position: absolute;
  background: var(--color);
  width: 100%;
  height: 100%;
  animation: ${loaderAnimation} 1s ease-in infinite;
`;
function BarLoader(props) {
  return (
    <Container>
      <LoaderParent {...props}>
        <Loader {...props} />
      </LoaderParent>
    </Container>
  );
}

export default BarLoader;
