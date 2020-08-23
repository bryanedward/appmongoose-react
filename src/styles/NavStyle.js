import { makeStyles } from '@material-ui/core/styles'


const drawerWidth = 240

const themes = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton:{
        [theme.breakpoints.up('sm')]:{
            display: 'none'
        }
    }
}))

export default themes