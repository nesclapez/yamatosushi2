import React from "react";
import {
  Avatar,
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { ShoppingCart, Settings } from "@material-ui/icons";

import { string, number } from "prop-types";

import yamatoLogo from "./logo.jpg";
import useStyles from "./useStyles";

import { Link } from "react-router-dom";

const websiteTitle = "Yamato Sushi";

export default function Header({ title, basketCount }) {
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
            aria-label={`Basket count ${basketCount}`}
            color="inherit"
          >
            <Badge badgeContent={basketCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton
            component={Link}
            to="/settings"
            aria-label="Settings"
            color="inherit"
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
  basketCount: number,
};

Header.defaultProps = {
  basketCount: 0,
};
