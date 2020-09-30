import React from "react";
import { TextField } from "@material-ui/core";

import Screen from "../Screen";
import SushiCardList from "../SushiCardList";

export default function HomeScreen() {
  const [search, setSearch] = React.useState("");
  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <Screen title="Homepage">
      <TextField variant="outlined" value={search} onChange={handleSearch} />
      <SushiCardList search={search} />
    </Screen>
  );
}
