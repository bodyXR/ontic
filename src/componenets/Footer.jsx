import React from "react";
import home from "../assets/homeIcon.png";
import videos from "../assets/videos.png";
import add from "../assets/add.png";
import profile from "../assets/profile.png";
import courses from "../assets/courses.png";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      sx={{
        background: "#1E1E1E",
        gap: "10px",
        height: "60px",
        pt: "15px",
        flexDirection: "row",
      }}
    >
      <Button sx={{ width: "30px", height: "30px" }}>
        <Link to="/home">
          <img sx={{ width: "10px", objectFit: "cover" }} src={home} alt="" />
        </Link>
      </Button>
      <Button sx={{ width: "30px", height: "30px" }}>
        <Link to="/videos">
          <img sx={{ width: "10px", objectFit: "cover" }} src={videos} alt="" />
        </Link>
      </Button>
      <Button sx={{ width: "30px", height: "30px" }}>
        {/* <Link to="/"> */}
        <img sx={{ width: "10px", objectFit: "cover" }} src={add} alt="" />
        {/* </Link> */}
      </Button>
      <Button sx={{ width: "30px", height: "30px" }}>
        <Link to="/courses">
          <img
            sx={{ width: "10px", objectFit: "cover" }}
            src={courses}
            alt=""
          />
        </Link>
      </Button>
      <Button sx={{ width: "30px", height: "30px" }}>
        <img sx={{ width: "10px", objectFit: "cover" }} src={profile} alt="" />
        <Link to=""></Link>
      </Button>
    </Stack>
  );
};

export default Footer;
