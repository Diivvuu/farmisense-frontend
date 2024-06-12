import styled from "styled-components";
import Header from "../Header";
import ReactSelect from "react-select";
import { useState } from "react";
import MaterialInput from "../../MaterialInput";
import makeRequest from "../../controllers/makeRequest";
import BarLoader from "../BarLoader";
import Button from "../Button";
import DashboardStat from "./DashboardStat";
import ComparisonStat from "./ComparisonStat";
import WithBackground from "../WithBackground";

/*
Chhattisgarh
Madhya Pradesh
Andhra Pradesh
Telangana
Karnataka
Tamil Nadu
Maharashtra
Gujarat
Rajasthan
Punjab
Haryana
Uttar Pradesh
Uttarakhand
Assam
Himachal Pradesh
Kerala
Orissa
West Bengal
Bihar
Jharkhand
*/

let stateOptions = [
  { label: "Chhattisgarh", value: "Chhattisgarh" },
  { label: "Madhya Pradesh", value: "Madhya Pradesh" },
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Telangana", value: "Telangana" },
  { label: "Karnataka", value: "Karnataka" },
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Maharashtra", value: "Maharashtra" },
  { label: "Gujarat", value: "Gujarat" },
  { label: "Rajasthan", value: "Rajasthan" },
  { label: "Punjab", value: "Punjab" },
  { label: "Haryana", value: "Haryana" },
  { label: "Uttar Pradesh", value: "Uttar Pradesh" },
  { label: "Uttarakhand", value: "Uttarakhand" },
  { label: "Assam", value: "Assam" },
  { label: "Himachal Pradesh", value: "Himachal Pradesh" },
  { label: "Kerala", value: "Kerala" },
  { label: "Orissa", value: "Orissa" },
  { label: "West Bengal", value: "West Bengal" },
  { label: "Bihar", value: "Bihar" },
  { label: "Jharkhand", value: "Jharkhand" },
];

let cropTypes = [
  { label: "Rice", value: "RICE" },
  { label: "Barley", value: "BARLEY" },
  { label: "Maze", value: "MAZE" },
  { label: "Wheat", value: "WHEAT" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 30px;
`;

const SubmitButton = styled(Button)`
  border-radius: 10px;
  width: 300px;
  font-size: 23px;
  font-weight: 900;
  background-color: var(--color2);
  color: #fff;
`;

const Title = styled.h1`
  /* font-size: 21px; */
  /* font-weight: 300; */
  margin-top: 30px;
  margin-bottom: 10px;
`;

const customStyles = {
  control: (base) => ({
    ...base,
    // height: 35,
    minHeight: 57,
    minWidth: 300,
    borderRadius: 10,
  }),
};

let initialProdData = {
  rice: 277.33260000000035,
  wheat: 424.90879999999976,
  maze: 671.2532999999996,
  barley: 671.2532999999996,
};

const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  gap: 30px;
  padding: 30px;

  @media (max-width: 900px) {
    font-size: 10px;
  }
`;

const Inputs = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 0px;
  border-bottom: 1px solid var(--translucentHard);
`;

const Card = styled.div`
  background: #fff;
  box-shadow: -2px 1px 12px 3px rgb(0 0 0 / 10%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 38vw;

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const FieldAndValue = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Field = styled.div`
  font-weight: 900;
  color: var(--color2);
`;
const Value = styled.div``;

const cropVsPrice = {
  RICE: 2340,
  WHEAT: 2022,
  MAZE: 1870,
  BARLEY: 1900,
};

export default function Predict() {
  const [stateName, setStateName] = useState(stateOptions[0]);
  const [area, setArea] = useState(200);
  const [cropType, setCropType] = useState(cropTypes[0]);
  const [loading, setLoading] = useState(false);
  const [prodData, setProdData] = useState(initialProdData);

  let actualResult = null;

  if (prodData) {
    let production = prodData[cropType.value.toLowerCase()];
    let price = cropVsPrice[cropType.value];
    let total = parseInt(production) * parseInt(price);
    actualResult = (
      <ResultCard>
        <FieldAndValue>
          <Field>Crop Production</Field>
          <Value>{production}</Value>
        </FieldAndValue>
        <FieldAndValue>
          <Field>Harvest Cost</Field>
          <Value>{price}</Value>
        </FieldAndValue>
        <FieldAndValue>
          <Field>Total</Field>
          <Value>{total}</Value>
        </FieldAndValue>
      </ResultCard>
    );
  }

  if (loading) {
    actualResult = <BarLoader />;
  }

  return (
    <Header>
      <WithBackground>
        <Container>
          <Title>Predict Cost</Title>

          <Card>
            <Inputs>
              <ReactSelect
                styles={customStyles}
                options={stateOptions}
                value={stateName}
                onChange={setStateName}
              />

              <ReactSelect
                styles={customStyles}
                options={cropTypes}
                value={cropType}
                onChange={setCropType}
              />

              <MaterialInput
                label={"Area"}
                placeholder={"Type Area"}
                value={area}
                onNewValue={setArea}
              />

              <SubmitButton onClick={calculate}>Predict</SubmitButton>
            </Inputs>
            {actualResult}
          </Card>
        </Container>
      </WithBackground>
    </Header>
  );

  async function calculate() {
    setLoading(true);
    let newData = await makeRequest(
      `/yields/?state=${stateName.value}&area=${area}`
    );

    setProdData(newData.data);
    setLoading(false);
  }
}
