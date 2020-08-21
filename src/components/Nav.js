import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../styles/NavStyle'

export default function Nav() {

    const themes = theme()
    console.log(themes)

        return (
            <div className={themes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={themes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" 
                            className={themes.title}>
                                Trabajando para React
                        </Typography>
                        <Button color="inherit" style={{
                        }}>Perfil</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
}
