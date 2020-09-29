import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import QuantityInput from "./QuantityInput";
import { string } from "prop-types";
import config from "react-global-configuration";
import useStyles from "./styles";
import { useCounter } from "react-use";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

  const { max, min, defaultValue } = config.get("quantity");

  //const [quantity, increment, decrement] = useCounter(1);

  const [quantity, { inc, dec, set }] = useCounter(defaultValue, max, min);

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

        <QuantityInput quantity={quantity} inc={inc} dec={dec} set={set} />
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
