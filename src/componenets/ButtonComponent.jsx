import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const ButtonComponent = ({text,path}) => {
  return (
    <Link to={path} style={{textDecoration:'none',color:'white'}}>
    <Button
      variant="contained"
      sx={{ bgcolor: "#1CC9EF", fontWeight: "bold", color: "#424242"  ,width:"300px" , marginTop:"50px"}}
    >
      <Typography>

      {text}
      </Typography>
    </Button>
      </Link>
  );
}

export default ButtonComponent
