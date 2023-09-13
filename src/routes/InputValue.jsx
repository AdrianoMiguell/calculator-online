import React from "react";
import { useState } from "react";
import RespCalc from "./RespCalc.jsx";
import styles from "./InputStyles.module.css";

const InputValue = () => {
  function getValues(e) {
    e.preventDefault();

    console.log("Número 1: " + number1 + "\nNúmero 2: " + number2);
  }

  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();

  return (
    <div className={styles.divInputContainer}>
      <form onSubmit={getValues}>
        <legend> Calculator Online </legend>

        <div className={styles.divSpaceInputs}>
          <input
            type="number"
            id="n1"
            name="n1"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <select name="operation" id="operation">
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <input
            type="number"
            name="n2"
            id="n2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>

        <input type="submit" value="Enviar" />
      </form>

      <RespCalc n1={number1} n2={number2} />
    </div>
  );
};

export default InputValue;
