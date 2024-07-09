import { Stack, Typography } from "@mui/material";
import React from "react";
import Steps from "./Steps";
import ButtonWithArrow from "./ButtonWithArrow";

const GetStartedContainer1 = () => {
  return (
    <Stack
      sx={{
        background: "#424242",
        borderRadius: "50px 50px 0 0",
        width: "100vw",
        padding: "17px",
        alignItems: "center",
        color:'#fff'
      }}
    >
      <Steps number={1}/>
      <Typography sx={{fontSize:'30px',fontWeight:'bold',textAlign:'center',mt:'42px'}}>Grow Your Knowledge while having fun!</Typography>
      <Typography sx={{fontSize:'14px',textAlign:'center',mt:'32px'}}>we are looking to help people to not waste there time and helping them getting knowledge on there interests</Typography>
      <ButtonWithArrow path='/get-started-2' color={'#fff'} bg={'#1E1E1E'}/>
    </Stack>
  );
};

export default GetStartedContainer1;
