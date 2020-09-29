import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

import { string } from "prop-types";

import useStyles from "./styles";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <AddBox fontSize="inherit" />
        </IconButton>
        <Input name="quantity" inputProps={{ "aria-label": "quantity" }} />
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small"> Ajouter </Button>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  image: string,
  title: string,
  description: string,
};

SushiCard.defaultProps = {
  image:
    "https://i2.wp.com/www.eatthis.com/wp-content/uploads/2020/07/assorted-sushi.jpg?resize=640%2C360",
  title: "maki",
  description: "Ingrédients: bla bla",
};
