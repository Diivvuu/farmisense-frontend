import styled from "styled-components";
import BarLoader from "./components/BarLoader";

const Main = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function LoadingSection() {
  return (
    <Main>
      <BarLoader />
    </Main>
  );
}
