import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <Box mt={8} id="about">
      <Paper>
        <Box p={2}>
          <Typography variant="h6">ABOUT</Typography>
        </Box>
        <Divider />
        <Box p={2}>
          <Typography variant="body2">
            CELLO FUNDAMENTO ĐÃ QUAY TRỞ LẠI
          </Typography>
          <Typography mt={2}>
            Chuỗi hoà nhạc quốc tế Cello Fundamento đã quay trở lại với buổi
            diễn âm nhạc cổ điển Cello Fundamento 7 (CF7) sẽ diễn ra vào ngày
            1.12.2023 tại Nhà hát lớn Hà Nội.
          </Typography>
          <Typography mt={2}>
            Tiếp nối thành công rực rỡ của những mùa trước, đặc biệt sau chuyến
            ra khơi OCEANA (CF6) được đón nhận nồng nhiệt bởi khán thính giả
            cùng giới chuyên môn, nhà sáng lập - nghệ sĩ Đinh Hoài Xuân đã đưa
            CF7 trở lại với một diện mạo mới: sang trọng, đẳng cấp, tinh tế.
          </Typography>
          <Typography mt={2}>
            🌹 Được sự hỗ trợ của Đại sứ quán Rumani, “APRÈS UN RÊVE" là buổi
            hoà nhạc đẳng cấp quốc tế kết hợp với các nghệ sĩ danh tiếng đến từ
            kinh đô âm nhạc châu Âu Pháp và Đức, được tổ chức bởi một nghệ sĩ
            Việt tài hoa và tràn đầy đam mê, muốn lan toả những giá trị nghệ
            thuật bền vững, chân chính tới đông đảo công chúng và ghi danh quê
            hương lên bản đồ âm nhạc thế giới.
          </Typography>
          <Typography mt={2}>
            🌹 Với chủ đề “APRÈS UN RÊVE” - "SAU MỘT GIẤC MƠ", CF7 hứa hẹn về
            một chuyến du lãm diệu kì giữa những thanh âm, một cuộc khám phá mới
            tới những chân trời xa xôi, nơi âm nhạc trở thành vĩnh cửu, thời
            gian đọng trong từng khoảnh khắc, một bản đàn có thể kéo lại cả muôn
            trùng không gian. Cello Fundamento đã có thể giong buồm ra biển lớn,
            và sau những cuộc mộng viễn dương vĩ đại ấy là nối tiếp đến bất tận
            những giấc mơ tươi đẹp.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default About;
