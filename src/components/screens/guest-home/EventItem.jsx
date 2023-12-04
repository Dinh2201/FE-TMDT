import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function EventItem() {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": {
          color: "rgb(42, 45, 52)",
          opacity: 0.5,
        },
      }}
    >
      <Box
        component={"img"}
        src={
          "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/11/08/2F7C72.jpg"
        }
        width={"100%"}
        height={140}
        sx={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <Stack>
        <Typography fontSize={18} lineHeight={"24px"} fontWeight={"bold"}>
          [LULULOLA SHOW] TUẤN HƯNG & TRẦN MẠNH CƯỜNG | GẤP ĐÔI YÊU THƯƠNG
        </Typography>
        <Typography
          mt={"8px"}
          fontSize={14}
          lineHeight={"20px"}
          color="rgb(42, 45, 52)"
        >
          15/12/2023
        </Typography>
        <Typography
          mt={"8px"}
          fontSize={14}
          lineHeight={"20px"}
          color="rgb(130, 139, 160)"
        >
          Live Music
        </Typography>
      </Stack>
    </Box>
  );
}

export default EventItem;
