import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import menu from "../assets/menu.png";
import bill from "../assets/bill.png";
import user from "../assets/user.png";
import rect from "../assets/rect_bg.png";
import enrolledCourse from "../assets/enrolled-course.png";
import course from "../assets/course.png";

import { Link } from "react-router-dom";
import Footer from "../componenets/Footer";

const Home = () => {
  return (
    <Stack
      sx={{ overflowY: "scroll", overflowX: "hidden", maxHeight: "1000px" }}
    >
      <Stack
        sx={{
          background: "#424242",
          border: "2px solid #A2A2A2",
          borderRadius: "0 0 80px 80px",
          width: "100vw",
          height: "190px",
        }}
      >
        <Stack
          sx={{
            m: "10px 20px",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={menu} style={{ width: "38px", height: "38px" }} />
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Jun 21, 2024
          </Typography>
          <img src={bill} style={{ width: "38px", height: "38px" }} />
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            m: "15px 30px",
          }}
        >
          <Stack>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", color: "#fff" }}
            >
              Morning,
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "20px", color: "#FFCD6B" }}
            >
              Abdullah Mohammed
            </Typography>
          </Stack>
          <Stack>
            <img src={user} style={{ width: "63px", height: "63px" }} />
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack sx={{ mt: "40px" }}>
          <img
            src={rect}
            style={{ position: "absolute", top: 200, zIndex: -1 }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#fff",
              width: "231px",
              ml: "30px",
            }}
          >
            What are you looking to learn today?
          </Typography>
          <TextField
            sx={{
              bgcolor: "#F8F8F8",
              width: "160px",
              borderRadius: "10px",
              ml: "30px",
              mt: "10px",
              height: "50px",
            }}
            variant="outlined"
            label={"Search.."}
          />
        </Stack>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "24px",
            color: "#424242",
            ml: "30px",
            mt: "50px",
          }}
        >
          Ongoing courses
        </Typography>
        <Typography sx={{ color: "#A2A2A2", fontSize: "15px", ml: "30px" }}>
          3 Enrolled courses
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            ml: "15px",
            mt: "10px",
            width: "360px",
            overflow: "scroll",
          }}
        >
          <Link to="/single-ongoing-course">
            <img
              src={enrolledCourse}
              style={{ width: "240px", objectFit: "cover" }}
            />
          </Link>
          <Link to="/single-ongoing-course">
            <img
              src={enrolledCourse}
              style={{ width: "240px", objectFit: "cover" }}
            />
          </Link>
          <Link to="/single-ongoing-course">
            <img
              src={enrolledCourse}
              style={{ width: "240px", objectFit: "cover" }}
            />
          </Link>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mr: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "24px",
              color: "#424242",
              ml: "30px",
              mt: "10px",
            }}
          >
            Most popular
          </Typography>
          <Link to="/courses">
            <Typography>View All</Typography>
          </Link>
        </Stack>
        <Typography sx={{ color: "#A2A2A2", fontSize: "15px", ml: "30px" }}>
          329 Available
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            ml: "15px",
            mt: "10px",
            width: "360px",
            overflow: "scroll",
          }}
        >
          <Link to="/single-course">
            <img src={course} style={{ width: "240px", objectFit: "cover" }} />
          </Link>
          <Link to="/single-course">
            <img src={course} style={{ width: "240px", objectFit: "cover" }} />
          </Link>
          <Link to="/single-course">
            <img src={course} style={{ width: "240px", objectFit: "cover" }} />
          </Link>
        </Stack>
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Home;
