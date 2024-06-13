import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="header">
          <div className="buttoncenter">
            <Button color="inherit"> Reservation </Button>
            <Button color="inherit"> Menu Cart </Button>
            <Button color="inherit"> About Us</Button>
            <Button className="button">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
