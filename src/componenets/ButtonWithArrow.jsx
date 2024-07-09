import React from "react";
import rightArrow from "../assets/right-arrow.png";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const ButtonWithArrow = ({ path, bg, color }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" , marginTop:'32px',marginBottom:'35px'}}>
      <Stack
        sx={{
          width: "229px",
          height: "50px",
          borderRadius: "50px",
          backgroundColor: bg,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap:'10px'
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "17px", color: color }}>
          Start your journey
        </Typography>
        <Stack
          sx={{
            width: "39px",
            height: "39px",
            borderRadius: "50px",
            backgroundColor: "#1CC9EF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={rightArrow}
            alt=""
            style={{ objectFit: "contain", width: "23px", height: "23px" }}
          />
        </Stack>
      </Stack>
    </Link>
  );
};

export default ButtonWithArrow;
