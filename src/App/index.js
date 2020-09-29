import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import SushiCardList from "../SushiCardList";

import Header from "../Header";
import theme from "./theme";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Homepage" />
      <article>
        <div className={classes.offset} />
        <SushiCardList />
      </article>
    </ThemeProvider>
  );
}
