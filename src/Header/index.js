import React from "react";
import {
  Avatar,
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

import { string } from "prop-types";

import yamatoLogo from "./logo.jpg";
import useStyles from "./useStyles";

import { Link } from "react-router-dom";

const websiteTitle = "Yamato Sushi";

export default function Header({ title }) {
  const classes = useStyles();
  const fullTitle = `${websiteTitle} - ${title}`;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Avatar src={yamatoLogo} alt={websiteTitle}></Avatar>
          </Link>
          <Typography variant="h6" className={classes.title}>
            {fullTitle}
          </Typography>
          <IconButton
            component={Link}
            to="/basket"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
