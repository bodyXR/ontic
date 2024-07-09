import React, { useEffect, useState } from "react";
import InputComponent from "../componenets/InputComponent";
import { Stack, Typography } from "@mui/material";
import ButtonComponent from "../componenets/ButtonComponent";
import SNavigationElement from "../componenets/SNavigationElement";
import { lightGreen } from "@mui/material/colors";
const Login = () => {

  return (
    <>
      <Stack
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Typography
            sx={{ fontSize: "40px", fontWeight: "bold", color: "#424242" }}
          >
            Login
          </Typography>
          <InputComponent label={"Enter your Email"} />
          <InputComponent label={"Enter your Password"} />
        </Stack>
        <Typography
          sx={{
            color: "blue",
            textDecoration: "underline",
            marginLeft: "165px",
            marginTop: "5px",
            fontSize: "15px",
            color: "#0066FF",
          }}
        >
          forget password?
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
          }}
        >
          <ButtonComponent text={"Login"} />
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underline",
              fontSize: "15px",
              color: "#0066FF",
            }}
          >
            Don’t have an account?
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
