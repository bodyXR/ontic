import React from "react";
import GetStartedContainer1 from "../componenets/GetStartedContainer1";
import { Stack } from "@mui/material";
import img from '../assets/getting-started.png'

const GetStarted1 = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <img src={img} style={{  width: "360px",marginTop:'50px', objectFit: "contain" }} />
      <GetStartedContainer1 />
    </Stack>
  );
};

export default GetStarted1;
