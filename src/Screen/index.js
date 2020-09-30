import React from "react";

import Header from "../Header";
import useStyles from "./styles";

import { string, node } from "prop-types";

export default function Screen({ title, children }) {
  const classes = useStyles();

  return (
    <>
      <Header title={title} />
      <div className={classes.offset} />
      <article>{children}</article>
    </>
  );
}

Screen.propTypes = {
  title: string,
  children: node,
};
