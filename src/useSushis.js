import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import fetchYamato from "./fetchYamato";

export default function useSushis(search) {
  const minLength = 3;
  let route = ["/sushis"];
  if (!isEmpty(search) && search.length >= minLength)
    route.push(`?q=${search}`);

  return useQuery(["sushis", search], () => fetchYamato(route.join("")));
}
