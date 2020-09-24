import React from "react";
import { number } from "prop-types";

import Button from "../Button";
import useCounter from "../useCounter";

import { CounterValue } from "./styles";

export default function Counter({ beginAt }) {
  const [stateValue, increment, decrement] = useCounter(beginAt); // Hook

  return (
    <div>
      <Button onClick={decrement} secondary>
        -
      </Button>
      <CounterValue>{stateValue}</CounterValue>
      <Button onClick={increment}>+</Button>
    </div>
  );
}

Counter.prototype = {
  beginAt: number,
};

Counter.defaultProps = {
  beginAt: 0,
};
