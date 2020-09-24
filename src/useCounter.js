import React from "react";

export default function useCounter(beginAt) {
  const [stateValue, stateUpdater] = React.useState(beginAt);

  const increment = () => stateUpdater(stateValue + 1);
  const decrement = () => stateUpdater(stateValue - 1);

  return [stateValue, increment, decrement];
}
