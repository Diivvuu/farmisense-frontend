import axios from "axios";
import "./App.css";
import MaterialInput from "./MaterialInput";
import { useState } from "react";

import LoadingSection from "./LoadingSection";
import styled from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material/styles/index.js";
import RouterPage from "./components/RouterPage";

import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    // mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transform: rotateZ(180deg);
  object-fit: cover;
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
const Main = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  margin-top: -20px;
  z-index: 100;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const TopSection = styled.div`
  color: #fff;
  width: 80vw;
  font-size: 60px;
  opacity: 0.7;
  font-weight: 900;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 90vw;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 50px;
  }
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const FrostedGlass = styled.div`
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  height: 70vh;
  padding: 40px;
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 90vw;
    padding: 20px;
  }
`;

const InputArea = styled(FrostedGlass)`
  width: 50vw;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    width: 90vw;
    height: 50vh;
  }
`;
const OutputArea = styled(FrostedGlass)`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    width: 90vw;
    height: auto;
    gap: 20px;
    padding-bottom: 30px;
  }
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid;
  color: var(--color);
  border-radius: 5px;
  width: 130px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const OutputData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
`;
const OutputDataValue = styled.div`
  font-size: 190px;
  font-weight: 900;

  @media (max-width: 900px) {
    font-size: 50px;
  }
`;
const OutputDataUnit = styled.div`
  font-size: 35px;
  opacity: 0.5;
`;
const OutputAreaTitle = styled.div`
  display: flex;
  font-weight: 900;
  font-size: 35px;
  opacity: 0.5;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
const OutputAreaContent = styled.div``;

const Message = styled.div`
  opacity: 0.5;
`;

function App() {
  const [stateName, setStateName] = useState(null);
  const [cropType, setCropType] = useState(null);
  const [area, setArea] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputData, setOutput] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <RouterPage />
      <ToastContainer />
    </ThemeProvider>
  );

  let outputComp = <Message>Press submit to see the prediction</Message>;

  if (loading) {
    outputComp = <LoadingSection />;
  } else {
    if (outputData) {
      if (outputData.error) {
        outputComp = <Message>Invalid input</Message>;
      } else {
        let theValue = outputData.data.Production;
        outputComp = (
          <OutputData>
            <OutputDataValue>{parseInt(theValue)}</OutputDataValue>
            <OutputDataUnit>Tons</OutputDataUnit>
          </OutputData>
        );
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <TopSection>Farmsense</TopSection>
          <BodySection>
            <InputArea>
              <Inputs>
                <MaterialInput
                  label={"State Name"}
                  placeholder={"Type State Name Here"}
                  value={stateName}
                  onChange={updateStateName}
                />
                <MaterialInput
                  label={"Crop Type"}
                  placeholder={"Type Crop Type Here"}
                  value={cropType}
                  onChange={updateCropType}
                />
                <MaterialInput
                  label={"Area"}
                  placeholder={"Type Area Here"}
                  value={area}
                  onChange={updateArea}
                />
              </Inputs>

              <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
            </InputArea>

            <OutputArea>
              <OutputAreaTitle>Production Prediction</OutputAreaTitle>
              <OutputAreaContent>{outputComp}</OutputAreaContent>
            </OutputArea>
          </BodySection>
        </Main>

        <Background src="/background.jpeg" />
      </Container>
    </ThemeProvider>
  );

  async function onSubmit() {
    setLoading(true);

    let path = `calculate-result?state=${stateName.trim()}&type=${cropType.trim()}&area=${area.trim()}`;
    let url = `https://crop-yield-production-fastapi.onrender.com/${path}`;

    if (window.location.href.indexOf("localhost") !== -1)
      url = `http://127.0.0.1:8000/${path}`;

    try {
      const data = await axios.get(url);
      setOutput(data);
    } catch (e) {
      setOutput({ error: true });
    }

    setLoading(false);
  }

  function updateStateName(e) {
    setStateName(e.target.value);
  }

  function updateCropType(e) {
    setCropType(e.target.value);
  }

  function updateArea(e) {
    setArea(e.target.value);
  }
}

export default App;
