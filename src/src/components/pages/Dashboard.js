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
  gap: 20px;
  padding: 30px;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SubmitButton = styled(Button)`
  border-radius: 10px;
  width: 300px;
  font-size: 23px;
  font-weight: 900;
  background-color: var(--color2);
  color: #fff;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Results = styled.div``;

const customStyles = {
  control: (base) => ({
    ...base,
    // height: 35,
    minHeight: 57,
    minWidth: 300,
    borderRadius: 10,
  }),
};

const customStyles2 = {
  control: (base) => ({
    ...base,
    // height: 35,
    minHeight: 57,
    minWidth: 180,
    borderRadius: 10,
  }),
};

let initialProdData = {
  rice: 277.33260000000035,
  wheat: 424.90879999999976,
  maze: 671.2532999999996,
  barley: 671.2532999999996,
};

let initialComparisonStat = {
  rice: [
    233.82110000000003, 517.8719000000006, 577.9580999999998,
    511.30760000000015,
  ],
  wheat: [377.44889999999964, 464.9828, 646.3844999999998, 378.8316999999996],
  maze: [853.0887000000002, 856.9872, 352.7339999999998, 671.4221999999994],
  barley: [853.0887000000002, 856.9872, 352.7339999999998, 671.4221999999994],
};

const SectionLabel = styled.div``;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionChildren = styled.div``;

export default function Dashboard() {
  const [stateName, setStateName] = useState(stateOptions[0]);
  const [area, setArea] = useState(200);
  const [loading, setLoading] = useState(false);
  const [prodData, setProdData] = useState(initialProdData);

  //for comparison
  const [stateName1, setStateName1] = useState(stateOptions[1]);
  const [stateName2, setStateName2] = useState(stateOptions[2]);
  const [stateName3, setStateName3] = useState(stateOptions[3]);
  const [stateName4, setStateName4] = useState(stateOptions[4]);
  const [area2, setArea2] = useState(200);
  const [comparisonData, setComparisonData] = useState(initialComparisonStat);
  const [loading2, setLoading2] = useState(false);

  let actualResult = null;
  let actualResult2 = null;

  //First row stat

  if (prodData) {
    actualResult = <DashboardStat prodData={prodData} />;
  }

  if (loading) {
    actualResult = <BarLoader />;
  }

  //Second Row Stat

  if (comparisonData) {
    actualResult2 = (
      <ComparisonStat
        states={[
          stateName1.value,
          stateName2.value,
          stateName3.value,
          stateName4.value,
        ]}
        data={comparisonData}
      />
    );
  }

  if (loading2) {
    actualResult2 = <BarLoader />;
  }

  return (
    <Header>
      <Container>
        <Title>Dashboard</Title>

        <Inputs>
          <ReactSelect
            styles={customStyles}
            options={stateOptions}
            value={stateName}
            onChange={setStateName}
          />
          <MaterialInput
            label={"Area"}
            placeholder={"Type Area"}
            value={area}
            onNewValue={setArea}
          />
          <SubmitButton onClick={calculate}>Calculate</SubmitButton>
        </Inputs>

        <Results>{actualResult}</Results>

        <Section>
          <SectionLabel>Compare States</SectionLabel>
          <SectionChildren>
            <Inputs>
              <ReactSelect
                styles={customStyles2}
                options={stateOptions}
                value={stateName1}
                onChange={updateState(setStateName1)}
              />
              <ReactSelect
                styles={customStyles2}
                options={stateOptions}
                value={stateName2}
                onChange={updateState(setStateName2)}
              />
              <ReactSelect
                styles={customStyles2}
                options={stateOptions}
                value={stateName3}
                onChange={updateState(setStateName3)}
              />
              <ReactSelect
                styles={customStyles2}
                options={stateOptions}
                value={stateName4}
                onChange={updateState(setStateName4)}
              />
              <MaterialInput
                label={"Area"}
                placeholder={"Type Area"}
                value={area2}
                onNewValue={setArea2}
              />
              <SubmitButton onClick={compareStates}>Compare</SubmitButton>
            </Inputs>
            {actualResult2}
          </SectionChildren>
        </Section>
      </Container>
    </Header>
  );

  function updateState(func) {
    return (newData) => {
      func(newData);
      compareStates();
    };
  }

  async function calculate() {
    setLoading(true);
    let newData = await makeRequest(
      `/yields/?state=${stateName.value}&area=${area}`
    );

    setProdData(newData.data);
    setLoading(false);
  }

  async function compareStates() {
    setLoading2(true);
    let newData = await makeRequest(
      `/states-comparison/?state1=${stateName1.value}&state2=${stateName2.value}&state3=${stateName3.value}&state4=${stateName4.value}&area=${area}`
    );

    setComparisonData(newData.data);
    setLoading2(false);
  }
}
