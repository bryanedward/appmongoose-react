import React from 'react'
import themesDrawer from '../styles/DrawerStyle'
import List from './List'
import { Drawer, Divider } from '@material-ui/core'

const Drawers = (props) => {

    const theme = themesDrawer()

    return (

        <Drawer
            className={theme.drawer}
            variant= {props.variant}
            classes={{
                paper: theme.drawerPaper
            }}
            anchor="left"
            open={props.open}
            onClose={props.close ? props.close : null}>
            <div className={theme.toolbar}></div>
            <Divider />
            <List />
        </Drawer>

    )
}

export default Drawers