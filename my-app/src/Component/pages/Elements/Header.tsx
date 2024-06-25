import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";
import MenuService from "../../../service/MenuService";

function Header() {
  return (
    <>
      <Toolbar className="header">
        <div className="homeicon-container">
          <HomeIcon
            className="houseicon"
            onClick={() => (window.location.href = "/")}
          ></HomeIcon>
        </div>
        <div className="buttoncenter">
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/reservation")}
          >
            Reservation
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/menu")}
          >
            Menu Cart
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/about")}
          >
            About Us
          </Button>
          {localStorage.getItem("role") == null ? (
            <Button
              className="button"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
          ) : (
            <Button
              className="button"
              onClick={() => {localStorage.removeItem("role");
                location.reload();
              }}
            >
              Sign out
            </Button>
          )}

          {localStorage.getItem("role") == "ADMIN" ? (
            <Button
              color="inherit"
              onClick={() => (window.location.href = "dashboard")}
            >
              Dashboard
            </Button>
          ) : null}
        </div>
      </Toolbar>
    </>
  );
}

export default Header;
