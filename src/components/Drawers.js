import React from 'react'
import themesDrawer from '../styles/DrawerStyle'
import List from './List'
import { Drawer, Divider } from '@material-ui/core'

const Drawers = () => {

    const theme = themesDrawer()

    return (
        <Drawer className={theme.drawer}
            variant="permanent"
            classes={{
                paper: theme.drawerPaper
            }}
            anchor="left">
            <div className={theme.toolbar}></div>
            <Divider />
            <List />
        </Drawer>
    )
}

export default Drawers