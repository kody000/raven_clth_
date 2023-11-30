// src/components/Navbar.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import useStyles from "./Navbar.styles";
import { Logo } from "../Icons/Icons";
import MenuIcon from "@material-ui/icons/Menu";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PersonIcon from "@material-ui/icons/Person";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import { openLoginDialog } from "../../features/login/loginSlice";

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleOpenLoginDialog = () => {
    dispatch(openLoginDialog());
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navigationContainer}>
          <Link to={"/"}>
            <div className={classes.logoContainer}>
              <Logo />
              <div className={classes.logoTextContainer}>
                <Typography className={classes.logoText}>Raven</Typography>
                <Typography className={classes.logoText}>clth_</Typography>
              </div>
            </div>
          </Link>
          <div className={classes.nextDropTimer}>
            <Typography className={classes.nextDropTitle}>Next drop</Typography>
            <Typography className={classes.timer}>24:16:16</Typography>
          </div>
          <div className={classes.navActionsContainer}>
          <Link to={"/cart"}>
            <IconButton className={classes.navAction}>
              <LocalMallIcon />
            </IconButton>
            </Link>
            <IconButton className={classes.navAction}>
              <PersonIcon />
            </IconButton>
            <IconButton className={classes.navAction} onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {isDrawerOpen && (
        <div className={classes.drawerContainer}>
          <Link to={"/new"}>
            <Typography className={classes.drawerAction}>New</Typography>
          </Link>
          <Link to={"/stock"}>
            <Typography className={classes.drawerAction}>Stock</Typography>
          </Link>
          <Link to={"/faq"}>
            <Typography className={classes.drawerAction}>FAQ</Typography>
          </Link>
          <Typography
            className={classes.drawerAction}
            onClick={handleOpenLoginDialog}
          >
            Login
          </Typography>
          <div className={classes.drawerSocialActionsContainer}>
            <IconButton className={classes.navAction}>
              <InstagramIcon />
            </IconButton>
            <div className={classes.divider} />
            <IconButton className={classes.navAction}>
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
