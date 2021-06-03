import React from "react";

import Box from "@material-ui/core/Box";

import DataGrid from "./DataGrid";
import "./App.css";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div>
      <Box
        component="main"
        className="App-main"
        p={2}
        mt={6}
        mx="auto"
        maxWidth={1200}
      >
        <DataGrid />
      </Box>
    </div>
  );
}

App.whyDidYouRender = true;
export default App;
