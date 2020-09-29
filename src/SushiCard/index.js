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
import {
  AddBox,
  IndeterminateCheckBox,
  InsertChartRounded,
} from "@material-ui/icons";

import { string } from "prop-types";

import useStyles from "./styles";

//import useCounter from "../useCounter";

import { useCounter } from "react-use";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

  //const [quantity, increment, decrement] = useCounter(1);
  const [quantity, { inc, dec }] = useCounter(1, 10, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <IconButton aria-label="ajouter" onClick={() => inc()}>
          <AddBox fontSize="inherit" />
        </IconButton>
        <Input
          name="quantity"
          value={quantity}
          inputProps={{ "aria-label": "quantity" }}
        />
        <IconButton aria-label="supprimer" onClick={() => dec()}>
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
