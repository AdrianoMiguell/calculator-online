import React from "react";
import styles from "../css/ResponseStyle.module.css";

const RespCalc = ({ n1, n2 }) => {
  function operation(num1, num2) {
    return Number(num1) + Number(num2);
  }

  return (
    <div>
        <span className={styles.spanResp}>
            {operation(n1, n2)} 
        </span>
    </div>
  );
};

export default RespCalc;
