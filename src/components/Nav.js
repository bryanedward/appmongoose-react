import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../styles/NavStyle'

export default function Nav() {

    const themes = theme()

    return (
        <AppBar position="fixed" className={themes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={themes.menuButton}
                    color="inherit"
                    aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={theme.title}>
                    Trabajando para React
                    </Typography>
            </Toolbar>
        </AppBar>
    )
}
