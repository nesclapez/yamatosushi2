import React from "react";
import Grid from "@material-ui/core/Grid";

import SushiCard from "../SushiCard";

import useStyles from "./styles";

import db from "../db.json";

export default function SushiCardList() {
  const classes = useStyles;

  const { suchis } = db;

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      {suchis.map(({ id, image, title, description }) => (
        <Grid item xs={6} md={3} key={id}>
          <SushiCard image={image} title={title} description={description} />
        </Grid>
      ))}
    </Grid>
  );
}
