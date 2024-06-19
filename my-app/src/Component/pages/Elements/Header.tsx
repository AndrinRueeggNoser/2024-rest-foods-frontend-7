import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
 
function Header() {
  return (
    <>
          <Toolbar className="header">
        <div className="homeicon-container">
          <HomeIcon className="houseicon" onClick={() => window.location.href = '/'}></HomeIcon>
        </div>
        <div className="buttoncenter">
          <Button color="inherit" onClick={() => window.location.href = '/reservation'}>Reservation</Button>
          <Button color="inherit" onClick={() => window.location.href = '/menu'}>Menu Cart</Button>
          <Button color="inherit" onClick={() => window.location.href = '/about'}>About Us</Button>
          <Button className="button" onClick={() => window.location.href = '/login'}>Login</Button>
        </div>
      </Toolbar>
    </>
  );
}
 
export default Header;