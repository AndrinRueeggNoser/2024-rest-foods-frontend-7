import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
 
function Header() {
  return (
    <>
      <Toolbar className="header">
        <div className="buttoncenter">
          <HomeIcon className="houseicon"></HomeIcon>
          <Button color="inherit" onClick={() => window.location.href = '/reservation'}> Reservation </Button>
          <Button color="inherit" onClick={() => window.location.href = '/menu'}> Menu Cart </Button>
          <Button color="inherit"> About Us</Button>
          <Button className="button">Login</Button>
        </div>
      </Toolbar>
    </>
  );
}
 
export default Header;