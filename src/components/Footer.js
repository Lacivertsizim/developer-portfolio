import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        bottom: "0",
      }}
    >
      <Box sx={{ mt: 1, fontSize: "1.2rem" }}>
        <a target="_blank" href="mailto:yusufay1157@gmail.com">
          <p style={{ color: "white" }}>Email:</p>
        </a>
        <p>yusufay1157@gmail.com</p>
      </Box>
      <Box sx={{ mt: 2 }}>
        <a target="_blank" href="https://github.com/idrisay">
          <GitHubIcon sx={{ color: "white", fontSize: "3rem" }} />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/idris-ay/">
          <LinkedInIcon sx={{ color: "white", fontSize: "3rem", ml: "1rem" }} />
        </a>
      </Box>
    </Container>
  );
};

export default Footer;
