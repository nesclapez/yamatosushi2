import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

import { arrayOf, shape, string, func } from "prop-types";

export default function BasketItemList({ sushis, removeAt }) {
  return (
    <List component="ol" aria-label="basket item list">
      {sushis.map(({ id, title }, i) => (
        <ListItem key={id}>
          <ListItemText primary={title} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              arial-label="delete"
              onClick={() => {
                removeAt(i);
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

BasketItemList.propTypes = {
  sushis: arrayOf(
    shape({
      id: Number,
      title: string,
    })
  ),
  removeAt: func,
};
