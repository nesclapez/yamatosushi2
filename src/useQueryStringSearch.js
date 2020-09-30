import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import url from "url";

import hasMinLength from "./hasMinLength";

export default function useQueryStringSearch() {
  const location = useLocation();

  const { q } = url.parse(location.search, true).query;

  const [search, setSearch] = React.useState(q || "");
  const history = useHistory();

  const handleChangeSearch = (event) => {
    const q = event.target.value;
    setSearch(q);

    if (hasMinLength(q, 3)) history.replace(`?q=${q}`);
    else history.replace("");
  };

  return [search, handleChangeSearch];
}
