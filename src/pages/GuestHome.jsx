import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Swipper from "../components/screens/guest-home/Swipper";
import ListEvent from "../components/screens/guest-home/ListEvent";
import { Box } from "@mui/material";

function GuestHome() {
  return (
    <MainLayout>
      <Swipper />
      <ListEvent />
      <Box display={"flex"} mt={8} gap={4} alignItems={"center"}>
        <Box
          width={"100%"}
          height={"2px"}
          bgcolor="rgb(230, 235, 245)"
          flex={1}
        />
        <Box
          bgcolor={"rgb(45,194,117)"}
          color={"white"}
          sx={{
            padding: "14px 30px",
            fontWeight: "bold",
            fontSize: 18,
            cursor: "pointer",
            borderRadius: "20px",
            "&:hover": {
              background: "rgb(35, 168, 100)",
            },
          }}
        >
          See More
        </Box>
        <Box
          width={"100%"}
          height={"2px"}
          bgcolor="rgb(230, 235, 245)"
          flex={1}
        />
      </Box>
    </MainLayout>
  );
}

export default GuestHome;
