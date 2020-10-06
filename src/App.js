import React, { useState } from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const calKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/"];

  const handleClick = (value) => {
    const newExp = expression.toString() + value;
    setExpression(newExp);
  };

  const calculate = () => {
    try {
      const result = evaluate(expression);
      setExpression(result);
    } catch (error) {
      setExpression("Not valid");

      setTimeout(() => {
        clear();
      }, 3000);
    }
  };

  const clear = () => {
    setExpression("");
  };

  const [expression, setExpression] = useState("");

  return (
    <div className="App">
      <div className="screen">{expression}</div>
      {calKeys.map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
      <button onClick={calculate}> = </button>
      <button onClick={clear}>C</button>
    </div>
  );
}
