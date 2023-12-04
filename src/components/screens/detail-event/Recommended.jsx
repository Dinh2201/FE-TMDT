import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CardEvent from "./CardEvent";

function Recommended() {
  return (
    <Box id="recommended">
      <Box
        sx={{ cursor: "pointer" }}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        <DateRangeOutlinedIcon sx={{ color: "rgb(45, 194, 117)" }} />
        <Typography variant="h6">Recommended for you</Typography>
      </Box>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
          <Grid item xs={4}>
            <CardEvent />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Recommended;
