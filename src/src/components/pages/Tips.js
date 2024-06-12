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
    title: "1. Crop Rotation",
    points: [
      "Increase soil fertility",
      "Reduce pest and disease pressure",
      "Prevent soil erosion",
      "Improve soil structure",
    ],
    image: "1.png",
  },
  {
    title: "2. Use Biodynamic Agriculture",
    points: [
      "Nutrient-dense plants",
      "Soil regeneration",
      "Improved food quality",
      "Plant resistance",
    ],
    image: "2.png",
  },
  {
    title: "3. Pest Management",
    points: [
      "Reduce the number of pests",
      "Reduce the number of pesticide applications",
      "Save money while protecting human health",
    ],
    image: "3.png",
  },
  {
    title: "4. Soil Health",
    points: [
      "Healthy plants",
      "High yields",
      "Healthy ecosystem",
      "Natural resources",
    ],
    image: "4.png",
  },
];

export default function Tips() {
  return (
    <Header>
      <WithBackground>
        <Container>
          <TitleSection>
            From Farm to Future: Sustainable Practices for a Healthier Planet
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

const Image = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;

function Card({ data }) {
  return (
    <CardContainer>
      <Image src={"/tips/" + data.image} />
      <CardTitle>{data.title}</CardTitle>
      <CardDescription>
        {data.points.map((item) => (
          <CardBullet>{item}</CardBullet>
        ))}
      </CardDescription>
    </CardContainer>
  );
}
