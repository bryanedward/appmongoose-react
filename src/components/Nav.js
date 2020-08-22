import React from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../styles/NavStyle'

export default function Nav() {

    const themes = theme()

    return (
        <div className={themes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={themes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit">Perfil</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
