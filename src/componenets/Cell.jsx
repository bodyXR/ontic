import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Cell = ({ name }) => {
  const [bg, setBg] = useState("#F8F8F8");
  const [color, setColor] = useState("#424242");
  return (
    <Stack
      sx={{
        color: color,
        background: bg,
        borderRadius: "50px",
        p: "6px 15px",
        cursor: "pointer",
      }}
      onClick={() => {setBg((prev) => prev === '#1CC9EF' ? '#F8F8F8' : '#1CC9EF');setColor((prev)=>prev === "#1E1E1E" ? "#F8F8F8" : "#424242")}}
    >
      <Typography sx={{ fontSize: "13px", fontWeight: "bold" }}>
        {name}
      </Typography>
    </Stack>
  );
};

export default Cell;
