import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const themesDrawer = makeStyles((theme) => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar


}))

export default themesDrawer