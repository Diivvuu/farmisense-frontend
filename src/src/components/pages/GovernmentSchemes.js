import styled from "styled-components";
import Header from "../Header";
import WithBackground from "../WithBackground";
import Button from "../Button";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
const TitleSection = styled.h1`
  margin: 0;
  padding: 30px;
  background: #fff;
  box-shadow: -2px 1px 12px 3px rgb(0 0 0 / 10%);
  border-radius: 10px;
`;
const Content = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

let schemes = [
  {
    title: "1. Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    points: [
      "PM-KISAN was launched on February 24, 2019, to support landholding farmers' financial needs.",
      "Provides Rs 6000 per year in three equal four-monthly instalments via Direct Benefit Transfer (DBT)",
    ],
    link: "https://pmkisan.gov.in/",
  },
  {
    title: "2. Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)",
    points: [
      "PM-KISAN was launched on February 24, 2019, to support landholding farmers' financial needs.",
      "Provides Rs 6000 per year in three equal four-monthly instalments via Direct Benefit Transfer (DBT)",
    ],
    link: "https://maandhan.in/",
  },
  {
    title: "3. Pradhan Mantri Fasal Bima Yojna (PM-FBY)",
    points: [
      "PM-KISAN was launched on February 24, 2019, to support landholding farmers' financial needs.",
      "Provides Rs 6000 per year in three equal four-monthly instalments via Direct Benefit Transfer (DBT)",
    ],
    link: "https://pmfby.gov.in/",
  },
  {
    title: "4. Agriculture Infrastructure Fund (AIF)",
    points: [
      "Agri Infra Fund launched under Atmanirbhar Bharat Package to address infrastructure gaps in agriculture.",
      "PMFBY launched in 2016 for comprehensive crop insurance against non-preventable natural risks.",
    ],
    link: "https://agriinfra.dac.gov.in/",
  },
];

export default function GovernmentSchemes() {
  return (
    <Header>
      <WithBackground>
        <Container>
          <TitleSection>
            Empowering Communities, Transforming Lives: Government Initiatives
            for All
          </TitleSection>

          <Content>
            {schemes.map((item) => (
              <Card data={item} />
            ))}
          </Content>
        </Container>
      </WithBackground>
    </Header>
  );
}

const CardContainer = styled.div`
  background: #fff;
  box-shadow: -2px 1px 12px 3px rgb(0 0 0 / 10%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 10px;
`;
const CardTitle = styled.h3``;
const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;
const CardBullet = styled.div`
  &::before {
    content: "";
    height: 10px;
    display: inline-block;
    border-radius: 100px;
    margin-right: 10px;
    width: 10px;
    background-color: var(--color1);
  }
`;
const ReadMoreButton = styled.a`
  border: none;
  background-color: var(--color1);
  color: var(--color3);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  &:hover {
    transform: scale(0.9);
  }
`;

function Card({ data }) {
  return (
    <CardContainer>
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>
        {data.points.map((item) => (
          <CardBullet>{item}</CardBullet>
        ))}
      </CardDescription>
      <ReadMoreButton href={data.link} target="_blank">
        Read More
      </ReadMoreButton>
    </CardContainer>
  );
}
