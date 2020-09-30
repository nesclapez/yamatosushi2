import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import url from "url";

import hasMinLength from "./hasMinLength";

export default function useQueryStringSearch(paramName = "q") {
  const location = useLocation();

  const params = url.parse(location.search, true).query;
  const q = params[paramName];

  const [search, setSearch] = React.useState(q || "");
  const history = useHistory();

  const handleChangeSearch = (event) => {
    const q = event.target.value;
    setSearch(q);

    if (hasMinLength(q, 3)) history.replace(`?${paramName}=${q}`);
    else history.replace("");
  };

  return [search, handleChangeSearch];
}
