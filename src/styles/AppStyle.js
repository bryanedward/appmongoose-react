import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

const themesApp = makeStyles((theme) => ({
    
    root: {
        display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

export default themesApp