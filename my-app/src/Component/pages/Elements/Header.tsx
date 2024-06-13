import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function Header() {



    return (
        <>
            <AppBar  position="static">
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