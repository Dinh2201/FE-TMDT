import React from "react";
import { Box } from "@mui/material";
import SideBarAdmin from "./sidebar/SideBarAdmin";
import Footer from "./footer";

function AdminLayout({ children }) {
  return (
    <Box display={"flex"}>
      <SideBarAdmin />
      <Box flex={1}>
        <Box minHeight={"100vh"}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default AdminLayout;
