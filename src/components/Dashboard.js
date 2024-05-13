import React, { useEffect } from "react";
import tableau from "tableau-api";

const Dashboard = () => {
  useEffect(() => {
    // Create the viz object and embed it in the div with id "tableauViz"
    const vizUrl =
      "https://public.tableau.com/views/FarmManagementSystem/Dashboard2?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link   ";
    const containerDiv = document.getElementById("tableauViz");
    const options = {
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: () => {
        console.log("Tableau dashboard is ready");
      },
    };
    const viz = new tableau.Viz(containerDiv, vizUrl, options);

    // Clean up when component unmounts
    return () => {
      console.log(tableau);
      viz.dispose();
    };
  }, []);

  return <div id="tableauViz"></div>;
};

export default Dashboard;
