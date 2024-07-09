import React from 'react'
import InputComponent from '../componenets/InputComponent';
import { Stack, Typography } from '@mui/material';
import ButtonComponent from '../componenets/ButtonComponent';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const NAvigte = useNavigate()


const click = ()=>{
NAvigte("/home");
}

  return (
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
          Register
        </Typography>
        <InputComponent label={"Enter your Email"} />
        <InputComponent label={"Enter your name"} />
        <InputComponent label={"+ 20"} />
        <InputComponent label={"Enter your password"} />
      </Stack>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
        }}
      >
        <ButtonComponent text={"Register"} path={'/home'}/>
        <Typography
          sx={{
            textDecoration: "underline",
            fontSize: "15px",
            color: "#0066FF",
          }}
        >
          already have an account?
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Register
