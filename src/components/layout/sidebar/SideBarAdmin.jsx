import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NumberText = styled("span")({
  background: "#8f9499",
  color: "#303b46",
  borderRadius: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 30,
  height: 30,
  lineHeight: 30,
});

const Item = styled(Box)({
  padding: "1.5em 2em",
  "&:hover": {
    background: "#dadada",
    "& p": {
      color: "#303b46",
    },
    "& span": {
      background: "#303b46",
      color: "#8f9499",
    },
  },
});

function SideBarAdmin() {
  const navigate = useNavigate();
  return (
    <Box
      position={"sticky"}
      top={0}
      width={"25vw"}
      height={"100vh"}
      bgcolor={"#303b46"}
    >
      <Box
        padding={"1em 2em"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={"/img/logo.jpg"}
          sx={{ objectFit: "cover", borderRadius: "4px" }}
          width={40}
          height={40}
        />
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography color={"white"} typography={"subtitle2"}>
            PHUCDINH
          </Typography>
          <Box
            component={"img"}
            src={"https://static.ticketbox.vn/avatar.png"}
            sx={{ objectFit: "cover", borderRadius: "50%" }}
            width={40}
            height={40}
          />
        </Box>
      </Box>

      <Box mt={4}>
        <Item onClick={() => navigate("/event-info")}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <NumberText>1</NumberText>
            <Typography color={"white"}>Thông tin sự kiện</Typography>
          </Box>
        </Item>
        <Item onClick={() => navigate("/ticket-and-time")}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <NumberText>2</NumberText>
            <Typography color={"white"}>Thời gian & Loại vé</Typography>
          </Box>
        </Item>
        <Item onClick={() => navigate("/setting-event")}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <NumberText>3</NumberText>
            <Typography color={"white"}>Cài đặt</Typography>
          </Box>
        </Item>
        <Item onClick={() => navigate("/info-payment-event")}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <NumberText>4</NumberText>
            <Typography color={"white"}>Thông tin thanh toán</Typography>
          </Box>
        </Item>
        <Item onClick={() => navigate("/approve-event")}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <NumberText>5</NumberText>
            <Typography color={"white"}>Phê duyệt sự kiện</Typography>
          </Box>
        </Item>
      </Box>
    </Box>
  );
}

export default SideBarAdmin;
