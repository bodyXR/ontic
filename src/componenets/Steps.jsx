import { Stack } from "@mui/material";
import React from "react";

const Steps = ({ number }) => {
  return (
    <Stack sx={{ flexDirection: "row",gap:'5px' , mt:'20px'}}>
      {new Array(3)
        .fill(0)
        .map((el, i) =>
          i + 1 !== number ? (
            <Stack
              key={i}
              sx={{
                background: "#fff",
                borderRadius: "50px",
                width: "7px",
                height: "7px",
              }}
            ></Stack>
          ) : (
            <Stack
              key={i}
              sx={{
                background: "#1CC9EF",
                borderRadius: "50px",
                width: "48px",
                height: "7px",
              }}
            ></Stack>
          )
        )}
    </Stack>
  );
};

export default Steps;
