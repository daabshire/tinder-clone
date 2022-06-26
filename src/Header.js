import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
    return (
      <div className="header">
          <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <img
        className="header_logo"
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-512.png"
        alt="" /> 

        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>

      </div>
    );
  }
  
  export default Header;