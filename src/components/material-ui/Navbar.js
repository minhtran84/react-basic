import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import { MenuIcon } from '@material-ui/icons/Menu';

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>                    
                    <Typography variant="h6" color="inherit">
                        Brandname
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;