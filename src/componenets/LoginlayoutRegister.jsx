import { Stack } from '@mui/material';
import React, { useState } from 'react'
import SNavigationElement from './SNavigationElement';
import Login from '../pages/Login';
import Register from '../pages/Register';

const LoginlayoutRegister = () => {
 const [isActive, setisActive] = useState(null);
  return (
    <Stack
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "30px",
      }}
    >
      <SNavigationElement
        to={'/auth/login'}
        onClick={() => setisActive("login")}
        className={`${isActive === "login" ? "activeelement" : ""}`}
      >
        Login
      </SNavigationElement>
      <div
        style={{
          width: "5px",
          height: "30px",
          backgroundColor: "#D9D9D9",
          borderRadius: "10px",
        }}
      ></div>
      <SNavigationElement
        to={'/auth/register'}
        onClick={() => setisActive("register")}
        className={`${isActive === "register" ? "activeelement" : ""}`}
      >
        Register
      </SNavigationElement>
    </Stack>
  );
}

export default LoginlayoutRegister
