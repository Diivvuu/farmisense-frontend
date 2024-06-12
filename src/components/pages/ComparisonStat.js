import styled from "styled-components";
import Header from "../Header";
import ReactSelect from "react-select";
import { useState } from "react";
import MaterialInput from "../../MaterialInput";
import makeRequest from "../../controllers/makeRequest";
import BarLoader from "../BarLoader";
import Button from "../Button";
import { BarChart, PieChart } from "@mui/x-charts";
import CustomBarChart from "../CustomBarChart";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  width: 100%;
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export default function ComparisonStat({ states, data }) {
  if (!data) return null;
  return (
    <Container>
      <Row1>
        <CustomBarChart
          title="Rice Production"
          data={data.rice}
          labels={states}
        />
        <CustomBarChart
          title="Wheat Production"
          data={data.wheat}
          labels={states}
        />
      </Row1>
      <Row1>
        <CustomBarChart
          title="Maze Production"
          data={data.maze}
          labels={states}
        />
        <CustomBarChart
          title="Barley Production"
          data={data.barley}
          labels={states}
        />
      </Row1>
    </Container>
  );
}
