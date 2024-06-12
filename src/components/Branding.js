import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;
const Logo = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 100px;
`;
const Text = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: #fff;
`;

export default function Branding() {
  return (
    <Container>
      <Logo src="/logo.png" />
      <Text>Farmsense</Text>
    </Container>
  );
}
