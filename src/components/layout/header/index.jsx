import { Box, Typography, styled } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import { useNavigate } from "react-router-dom";

const InputCustom = styled("input")({
  outline: "none",
  border: "none",
  fontSize: 16,
  height: 44,
  paddingRight: "200px",
  background: "rgb(245, 247, 252)",
});

const WrapInput = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "0px 8px",
  background: "rgb(245, 247, 252)",
  gap: 8,
  borderRadius: "4px",
  color: "rgb(42, 45, 52)",
  border: "1px solid transparent",
  "&:hover": {
    borderColor: "rgb(175, 184, 201)",
  },
  "&:focus-within": {
    borderColor: "rgb(175, 184, 201)",
  },
});

const CreateEvent = styled(Box)({
  color: "rgb(45, 194, 117)",
  border: "1px solid rgb(45, 194, 117)",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: 16,
  minWidth: 88,
  lineHeight: "24px",
  padding: "10px 24px",
  "&:hover": {
    borderColor: "rgb(35, 168, 100)",
    color: "rgb(35, 168, 100)",
  },
});

function Header() {
  const navigate = useNavigate();
  return (
    <Box
      bgcolor={"#fff"}
      height={76}
      display={"flex"}
      alignItems={"center"}
      paddingX={"32px"}
      justifyContent={"space-between"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={999}
    >
      <Box display={"flex"} alignItems={"center"} gap={"32px"}>
        <Box component={"img"} src="/img/logo.jpg" height={44} />
        <WrapInput>
          <SearchOutlinedIcon sx={{ color: "rgb(42, 45, 52)" }} />
          <InputCustom placeholder="Search" />
        </WrapInput>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"32px"}
        sx={{ cursor: "pointer" }}
      >
        <CreateEvent onClick={() => navigate("/event/create")}>
          Create event
        </CreateEvent>
        <DvrOutlinedIcon
          sx={{
            color: "rgb(42, 45, 52)",
            "&:hover": {
              color: "rgb(35, 168, 100)",
            },
          }}
        />
        <Box display={"flex"} alignItems={"center"} gap={"8px"}>
          <Typography
            fontSize={16}
            fontWeight={500}
            onClick={() => navigate("/login")}
          >
            Log in
          </Typography>
          <Box width={"1px"} height={"16px"} bgcolor={"rgb(42, 45, 52)"} />
          <Typography
            fontSize={16}
            fontWeight={500}
            onClick={() => navigate("/sign-up")}
          >
            Sign up
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
