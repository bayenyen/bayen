import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  const instagramGradient = {
    background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    backgroundSize: "300% 300%",
    animation: "gradientMove 4s ease infinite",
    fontFamily: "'Grand Hotel', cursive"  // Instagram-style script font
  };

  return (
    <>
      {/* Import Instagram-style font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Typography
        variant="h6"
        fontWeight="bold"
        fontSize="2rem"   /* bigger to match the Instagram look */
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={instagramGradient}>BayenTV</span>
        </Link>
      </Typography>
    </>
  );
};

export default Logo;
