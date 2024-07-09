import React from "react";
import GetStartedContainer2 from "../componenets/GetStartedContainer2";
import img from "../assets/getting-started.png";
import { Stack } from "@mui/material";

const GetStarted2 = () => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <img src={img} style={{ width: "317px", objectFit: "contain" }} />
      <GetStartedContainer2 />
    </Stack>
  );
};

export default GetStarted2;
