import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";

const Random = () => {
  const { presentText } = useSelector((store) => store.AppReducer);
  return (
    <Box
      sx={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        border: "3px solid white",
        width: "30%",
        margin: "auto",
        
        paddingBottom: "20px",
        marginTop: "30px",
        marginBottom: "40px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ marginTop: "20px", fontSize: "50px" ,color:'brown' ,fontStyle:'revert-layer',}}>
        {presentText}
      </Typography>
    </Box>
  );
};

export default Random;
