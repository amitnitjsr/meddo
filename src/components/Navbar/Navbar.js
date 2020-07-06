import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '20px',
        marginLeft: '38%'
    },
}));

function ButtonAppBar(props) {
    const classes = useStyles();

    const logoutHandler = () => {
        props.signInFun(false);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title}>
                        Notes <br /> <span style={{ fontSize: '13px' }}> {props.list && props.list.length} Notes </span>
                    </Typography>
                    <Button onClick={() => logoutHandler()}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        list: state.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signInFun: (isSignedIn) => {
            dispatch({
                type: 'signInFun',
                payload: {
                    "isSignedIn": isSignedIn
                }
            })
        },

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonAppBar);

