import React from "react";

import { Grid, Input, IconButton } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

import { func, number } from "prop-types";

import config from "react-global-configuration";

function Button({ onClick, label, disabled, Icon }) {
  return (
    <IconButton aria-label={label} onClick={onClick} disabled={disabled}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
}

export default function QuantityInput({ quantity, inc, dec, set }) {
  const { min, max } = config.get("quantity");
  const handleChange = (event) => set(event.target.value);

  const isInc = quantity < max;
  const isDec = quantity > min;

  return (
    <Grid container>
      <Grid item xs={4}>
        {inc && (
          <Button
            onClick={() => inc()}
            label="Ajouter"
            Icon={AddBox}
            disabled={!isInc}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Input
          name="quantity"
          value={quantity}
          onChange={handleChange}
          inputProps={{ "aria-label": "quantity" }}
        />
      </Grid>
      <Grid item xs={4}>
        {dec && (
          <Button
            onClick={() => dec()}
            label="Supprimer"
            Icon={IndeterminateCheckBox}
            disabled={!isDec}
          />
        )}
      </Grid>
    </Grid>
  );
}

QuantityInput.propTypes = {
  quantiy: number,
  inc: func,
  dec: func,
  set: func,
};

QuantityInput.defaultProps = {
  quantiy: 0,
  set: Function.prototype,
};
