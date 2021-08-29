// import React, { useState, useEffect } from "react";
// import images from "./images.jpeg";
// import "./navbar.css";
// import { useAuth0 } from "@auth0/auth0-react";

// const Navbar = () => {
//   const { isAuthenticated } = useAuth0();
//   return (
//     <>
//       <div className="Container">
//         <img src={images} width="250" className="sidebar" alt="" />
//         <div className="Container-wrapper">
//           {isAuthenticated && <a href="/logout">Logout</a>}

//           {!isAuthenticated && (
//             <>
//               <a href="/auth">Login</a>
//               <a href="/">Register</a>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import images from "./images.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 660,
      width: 350,
      marginLeft: theme.spacing(0),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={images} alt="logo" className={classes.logo} />

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Expense Tracker
          </Typography>
          {isAuthenticated ? (
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </Button>
          ) : (
            <>
              <Button onClick={loginWithRedirect} color="inherit">
                Login
              </Button>
              <Button onClick={loginWithRedirect} color="inherit">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
    // </div>
  );
}
