import styled from "styled-components";
import Header from "../Header";
import WithBackground from "../WithBackground";

const Container = styled.div`
  /* background-image: url("bg-pattern.jpg"); */
  /* background-repeat: repeat; */
  /* background-size: 35% 35%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 30px;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
`;
const Team = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const Section = styled.div`
  margin-top: 50px;
`;
const SubHeading = styled.div`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;
const Content = styled.div`
  font-size: 21px;
  text-align: center;
  margin-top: 30px;
`;

export default function AboutUs() {
  return (
    <Header>
      <WithBackground>
        <Container>
          <br />
          <Title>About Us</Title>
          <br />
          <Team>
            <Member image="nikita.png" name="Nikita Tayal" />
            <Member image="aryan.png" name="Aryan Bandral" />
            <Member image="aman.png" name="Aman Malik" />
            <Member image="divyanshu.png" name="Divyanshu" />
          </Team>
          <br />
          <Section>
            <SubHeading>Our Vision</SubHeading>
            <Content>
              “Our vision is to build a digital platform that fosters
              sustainable agricultural practices by integrating advanced
              technologies for precise crop prediction and cost analysis.
              Through comprehensive data analytics, we aim to empower farmers
              with actionable insights that boost productivity while minimising
              environmental impact. Our website serves as a resource hub,
              connecting stakeholders and encouraging a collaborative approach
              to achieving a more sustainable future for agriculture.”
            </Content>
          </Section>
        </Container>
      </WithBackground>
    </Header>
  );
}

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 15px;
  padding: 30px;
  border-radius: 10px;
  align-items: center;
  box-shadow: -2px 1px 12px 3px rgb(0 0 0 / 10%);
`;
const MemberImage = styled.img`
  height: 170px;
  width: 170px;
  object-fit: cover;
  border-radius: 300px;
  border: 10px solid var(--color2);
`;
const MemberName = styled.div`
  font-size: 25px;
  font-weight: 900;
`;

function Member({ image, name }) {
  return (
    <MemberContainer>
      <MemberImage src={"/" + image} />
      <MemberName>{name}</MemberName>
    </MemberContainer>
  );
}
