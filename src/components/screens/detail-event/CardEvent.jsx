import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip } from "@mui/material";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

export default function CardEvent() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          "https://images.tkbcdn.com/1/780/300/Upload/eventcover/2023/11/29/352AE6.jpg?w=360&maxheight=137&mode=crop&anchor=topcenter"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          [Bến Thành] MINISHOW HỒ VĂN CƯỜNG Special guest: Phương Ý
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={"2px"} alignItems={"center"}>
            <AttachMoneyOutlinedIcon fontSize="20px" />
            <Typography variant="subtitle2">300000</Typography>
          </Box>
          <Box display={"flex"} gap={"2px"} alignItems={"center"}>
            <DateRangeOutlinedIcon fontSize="20px" />
            <Typography variant="subtitle2">08.12.2023</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Chip label="Live Music" color="error" />
        <Chip label="Hồ Chí Minh" color="success" />
      </CardActions>
    </Card>
  );
}
