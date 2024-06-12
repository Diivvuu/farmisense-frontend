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
import chartColors from "../../data/chartColors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 10px; */
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

export default function DashboardStat({ prodData }) {
  let width = window.innerWidth * 0.3;

  if (window.innerWidth < 900) {
    width = window.innerWidth * 0.9;
  }

  return (
    <Container>
      <Row1>
        <CustomBarChart
          title="Crop Production"
          data={[prodData.rice, prodData.wheat, prodData.barley, prodData.maze]}
          labels={["Rice", "Wheat", "Barley", "Maze"]}
        />

        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: prodData.rice,
                  label: "Rice",
                  color: chartColors[0],
                },
                {
                  id: 1,
                  value: prodData.wheat,
                  label: "Wheat",
                  color: chartColors[1],
                },
                {
                  id: 2,
                  value: prodData.barley,
                  label: "Barley",
                  color: chartColors[2],
                },
                {
                  id: 3,
                  value: prodData.maze,
                  label: "Maze",
                  color: chartColors[3],
                },
              ],
              label: "Production Stat",
            },
          ]}
          width={width}
          height={400}
        />
      </Row1>
    </Container>
  );
}
