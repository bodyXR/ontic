import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginlayoutRegister from './LoginlayoutRegister';
const AuthLayout = () => {
  return <div>
    <LoginlayoutRegister/>
    <Outlet/>
    </div>;
}

export default AuthLayout
