import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import styles from './Header.module.css';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={styles.header}>Your Company</Typography>
                <AppleIcon />
            </Toolbar>
        </AppBar>
    );
}

export default Header;