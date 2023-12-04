import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ButtonCustom from "../../common/ButtonCustom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function InfoEvent() {
  return (
    <Box>
      <Box
        component={"img"}
        src="https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2023/10/20/77CC60.jpg"
        width={"100%"}
        height={"50vh"}
        sx={{ objectFit: "cover" }}
      />
      <Container>
        <Box py={"30px"}>
          <Grid container>
            <Grid xs={6} item>
              <Typography fontSize={24} fontWeight={700}>
                [HN] Hòa nhạc Cổ điển Quốc tế - Cello Fundamento 7 - Nhập Code:
                "TEACHERDAY" Giảm Ngay 120K
              </Typography>
              <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                <AccessTimeOutlinedIcon />
                <Typography variant="subtitle2">
                  Friday, 01 December 2023 (08:00 PM - 10:00 PM)
                </Typography>
              </Box>
              <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                <LocationOnOutlinedIcon />
                <Typography variant="subtitle2">
                  Hanoi Opera House (Nhà hát lớn)
                </Typography>
              </Box>
            </Grid>
            <Grid xs={2}></Grid>
            <Grid xs={4} item>
              <ButtonCustom
                fullWidth
                variant="contained"
                size={"large"}
                text={"Sold out"}
              />
              <Box mt={2} display={"flex"} justifyContent={"space-between"}>
                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<FacebookOutlinedIcon />}
                >
                  Share to Facebook
                </Button>
                <Button
                  component="label"
                  variant="outlined"
                  color="success"
                  startIcon={<FavoriteBorderOutlinedIcon />}
                >
                  Follow
                </Button>
              </Box>
              <Box mt={2}>
                <Typography variant="subtitle2" textAlign={"center"}>
                  552 Followers
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default InfoEvent;
