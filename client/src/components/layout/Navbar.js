

import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    buttonColor: {
      background: "white",
    },
  }),
);

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Cyber World
          </Typography>
          {/* <div className="col s6">
              <Link
                to="/login"
              >
                <Button className={classes.buttonColor}>Login</Button>
              </Link>
              <Link
                to="/register"
                style={{
                  borderRadius: "3px",
                  marginLeft: "10px",
                  letterSpacing: "1.5px"
                }}
              >
                <Button className={classes.buttonColor}>Register</Button>
              </Link>
            </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};


export default Navbar;