import React, { useState } from "react";
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline,
    ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import { HashRouter,Route,Switch,Link, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Demo from "./Demo";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DehazeIcon from '@material-ui/icons/Dehaze';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        margin: "auto"
    },
    link:{
textDecoration:'none !important',

    },
    drawer: {
        width: drawerWidth
    },
    content: {
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: drawerWidth
    },
    // sidebackground : {
    //     width : '100%',
    //     height : '1000%',
    //     background : `url(${causal})`,
    //     backgroundPosition:'center',
    //     backgroundSize :'cover'
    // }
    background:{
        color:'blue'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    return (
        <BrowserRouter>
        <div>
            <CssBaseline />
            <Drawer open={open} onClose={() => setOpen(false)} variant="persistent" className={classes.background}>
            <div  >
            <List>
                <ListItem>
                <img src='https://www.causalfunnel.com/assets/images/LOGO%20with%20Name%20Colored.svg' style={{width:'100%', height:'36px'}}/>
                </ListItem>
            </List>
               
                <List disablePadding className={classes.drawer}>
                    <Link to="/" className={classes.link}>
                    <ListItem button>
                    <ListItemIcon>
                    <AcUnitIcon/>
                    </ListItemIcon>
                        <ListItemText primary="Demo-covid-19" />
                    </ListItem>
                    </Link>
                </List>
                </div>
            </Drawer>
            <AppBar
                position="static"
               style={{backgroundColor:'#3681ab'}}
                className={classNames(classes.appBar, { [classes.appBarShift]: open })}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    India COVID-19 DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
            >
                <Switch>
                    
                    <Route exact path="/" component={Demo}/>
                    </Switch>
            </main>
        </div>
        </BrowserRouter>
    );
};

export default Navbar;
