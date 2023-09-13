import React from "react";
import styles from "../css/ResponseStyle.module.css";

export const RespCalc = ({ n1, n2, op }) => {
  let result;

  function operation(num1, num2, oper) {
    if (oper == "+") {
      result = Number(num1) + Number(num2);
    } else if (oper == "-") {
      result = Number(num1) - Number(num2);
    } else if (oper == "*") {
      result = Number(num1) * Number(num2);
    } else if (oper == "/") {
      result = Number(num1) / Number(num2);
    }

    if (num1 != undefined && num2 != undefined) {
      return result;
    } else {
      return "Operação invalida ou números faltando!";
    }
  }

  return (
    <div className={styles.containerResp}>
      <span className={styles.spanInfo}>Resultado</span>
      <span className={styles.spanResp}>{operation(n1, n2, op)}</span>
    </div>
  );
};

export default RespCalc;
