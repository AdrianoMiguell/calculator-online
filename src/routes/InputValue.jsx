import React from "react";
import { useState } from "react";
import RespCalc from "./RespCalc.jsx";
import styles from "../css/InputStyle.module.css";

const InputValue = () => {
  function getValues(e) {
    e.preventDefault();
    console.log("Número 1: " + number1 + "\nNúmero 2: " + number2);
  }

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [operation = "+", setOperation] = useState();
  const tipesOperations = [
    { sel: "selected", op: "+" },
    { sel: "", op: "-" },
    { sel: "", op: "*" },
    { sel: "", op: "/" },
  ];

  console.log(Number(number1));

  return (
    <div className={styles.divInputContainer}>
      <form onSubmit={getValues}>
        <div className={styles.divSpaceInputs}>
          <input
            type="number"
            id="n1"
            name="n1"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <select
            name="operation"
            id="operation"
            onChange={(e) => {
              setOperation(e.target.value);
            }}
          >
            {tipesOperations.map((item) => (
              <option value={item.op} selected={item.sel}>
                {item.op}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="n2"
            id="n2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
      </form>

      <RespCalc n1={number1} n2={number2} op={operation} />
    </div>
  );
};

export default InputValue;