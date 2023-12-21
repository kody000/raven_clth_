// src/components/Navbar.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import useStyles from "./Navbar.styles";
import { Logo } from "../../Icons/Icons";
import MenuIcon from "@material-ui/icons/Menu";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PersonIcon from "@material-ui/icons/Person";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";
import { openLoginDialog, logoff } from "../../features/login/loginSlice";
import { selectTotalItemsInCart } from "../../features/products/selectors";
import { selectLoggedInUser } from "../../features/login/selectors";
import { TikTokLogo } from "../../Icons/Icons";

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const itemCount = useSelector(selectTotalItemsInCart);
  const loggedInUser = useSelector(selectLoggedInUser);
  const isLoggedIn = loggedInUser?.token;

  const handleMenuClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleOpenLoginDialog = () => {
    dispatch(openLoginDialog());
  };

  const handleLogOff = () => {
    console.log(isLoggedIn);
    dispatch(logoff());
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
          {/* <div className={classes.nextDropTimer}>
            <Typography className={classes.nextDropTitle}>Next drop</Typography>
            <Typography className={classes.timer}>24:16:16</Typography>
          </div> */}
          <div className={classes.navActionsContainer}>
            <Link to={"/cart"}>
              <IconButton className={classes.navAction}>
                <Badge
                  badgeContent={itemCount}
                  color={"secondary"}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <LocalMallIcon />
                </Badge>
              </IconButton>
            </Link>
            {isLoggedIn && (
              <Link to="profile">
                <IconButton className={classes.navAction}>
                  <PersonIcon />
                </IconButton>
              </Link>
            )}
            {!isLoggedIn && (
              <IconButton
                className={classes.navAction}
                onClick={handleOpenLoginDialog}
              >
                <PersonIcon />
              </IconButton>
            )}
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
          {isLoggedIn ? (
            <Link to={"/"}>
              <Typography
                className={classes.drawerAction}
                onClick={handleLogOff}
              >
                Log off
              </Typography>
            </Link>
          ) : (
            <Typography
              className={classes.drawerAction}
              onClick={handleOpenLoginDialog}
            >
              Login
            </Typography>
          )}
          <div className={classes.drawerSocialActionsContainer}>
            <IconButton className={classes.navAction}>
              <InstagramIcon />
            </IconButton>
            <div className={classes.divider} />
            <IconButton className={classes.navAction}>
              <TikTokLogo />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
