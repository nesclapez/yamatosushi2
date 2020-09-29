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

const websiteTitle = "Yamato Sushi";

export default function Header({ title }) {
  const classes = useStyles();
  const fullTitle = `${websiteTitle} - ${title}`;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar src={yamatoLogo} alt={websiteTitle}></Avatar>
        <Typography variant="h6" className={classes.title}>
          {fullTitle}
        </Typography>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
