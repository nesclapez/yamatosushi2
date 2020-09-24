import React from "react";
import Counter from "../Counter";

import Greetings from "../Greetings";

export default function App() {
  return (
    <article>
      <Greetings firstName="Bebert" lastName="Lancien" />
      <Greetings firstName="Popaul" lastName="Lejeune" />
      <Greetings firstName="Bob" />

      <Counter beginAt={4} />
      <Counter />
    </article>
  );
}
