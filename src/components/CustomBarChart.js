import styled from "styled-components";
import { BarChart, PieChart } from "@mui/x-charts";
import chartColors from "../data/chartColors";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 10px; */
  width: auto;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function CustomBarChart({ data, labels, title }) {
  let width = window.innerWidth * 0.3;

  if (window.innerWidth < 900) {
    width = window.innerWidth * 0.9;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <BarChart
        title="My Bar Chart Title"
        xAxis={[{ scaleType: "band", data: labels, barGapRatio: -1 }]}
        series={[
          {
            color: chartColors[0],
            data: [data[0], 0, 0, 0],
            label: labels[0],
          },
          {
            color: chartColors[1],
            data: [0, data[1], 0, 0],
            label: labels[1],
          },
          {
            color: chartColors[2],
            data: [0, 0, data[2], 0],
            label: labels[2],
          },
          {
            color: chartColors[3],
            data: [0, 0, 0, data[3]],
            label: labels[3],
          },
        ]}
        width={width}
        height={400}
      />
    </Container>
  );
}
