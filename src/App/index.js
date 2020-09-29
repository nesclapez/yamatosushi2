import React from "react";
import { CssBaseline, TextField } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import SushiCardList from "../SushiCardList";

import Header from "../Header";
import theme from "./theme";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const handleSearch = (event) => setSearch(event.target.value);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Homepage" />
      <div className={classes.offset} />
      <article>
        <TextField variant="outlined" value={search} onChange={handleSearch} />
        <SushiCardList search={search} />
      </article>
    </ThemeProvider>
  );
}
