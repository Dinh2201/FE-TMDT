import { Box, Paper, Typography, Divider } from "@mui/material";
import React from "react";

function TicketInfomation() {
  return (
    <Box mt={8} id="ticket-information">
      <Paper>
        <Box p={2}>
          <Typography variant="h6">TICKET INFORMATION</Typography>
        </Box>
        <Divider />
        <Box px={4} py={2} display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={18}>NHÁ NHEM</Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            450,000 VND
          </Typography>
        </Box>
        <Divider />
        <Box px={4} py={2} display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={18}>CHẬP CHOẠNG</Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            550,000 VND
          </Typography>
        </Box>
        <Divider />
        <Box px={4} py={2} display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={18}>CHẠNG VẠNG</Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            800,000 VND
          </Typography>
        </Box>
        <Divider />
        <Box px={4} py={2} display={"flex"} justifyContent={"space-between"}>
          <Typography fontSize={18}>CHIỀU TÀ</Typography>
          <Typography fontSize={20} fontWeight={"bold"}>
            950,000 VND
          </Typography>
        </Box>
        <Divider />
      </Paper>
    </Box>
  );
}

export default TicketInfomation;
