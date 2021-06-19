import React from "react";

import Accordion from "./components/Accordion";

const ITEMS = [
  {
    title: "What is React?",
    content: "React is a JavaScript front end library",
  },
  {
    title: "Why use React? ",
    content: "React is a extremely powerful library",
  },
  {
    title: "How to use React? ",
    content: "You can use React by creating components",
  },
];

const App = () => {
  return <Accordion items={ITEMS} />;
};

export default App;
