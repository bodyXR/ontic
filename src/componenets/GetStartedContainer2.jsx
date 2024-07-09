import { Stack, Typography } from "@mui/material";
import React from "react";
import Steps from "./Steps";
import ButtonWithArrow from "./ButtonWithArrow";
import Cell from "./Cell";

const GetStartedContainer2 = () => {
    const interests = [
        "Web Development",
        "Artificial Intelligence",
        "Traveling",
        "Reading",
        "Music",
        "Photography",
        "Cooking",
        "Sports",
        "Fitness",
        "Gardening",
        "Gaming",
        "Painting",
        "Writing",
        "Astronomy",
    ];
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
      <Steps number={2}/>
      <Typography sx={{fontSize:'30px',fontWeight:'bold',textAlign:'center',mt:'42px'}}>tell us about your interests?</Typography>
      <Stack sx={{flexDirection:'row',flexWrap:'wrap',gap:'10px',mt:'20px',justifyContent:'center'}}>
        {interests.map((el)=><Cell name={el}/>)}
      </Stack>
      <ButtonWithArrow path='/login' color={'#1E1E1E'} bg={'#fff'}/>
    </Stack>
  );
};

export default GetStartedContainer2;
