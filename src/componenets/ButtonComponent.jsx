import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({text}) => {
  return (
    <Button
      variant="contained"
      sx={{ bgcolor: "#1CC9EF", fontWeight: "bold", color: "#424242"  ,width:"300px" , marginTop:"50px"}}
    >
      {text}
    </Button>
  );
}

export default ButtonComponent
