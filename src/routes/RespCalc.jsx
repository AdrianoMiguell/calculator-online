import React from "react";
import styles from "../css/ResponseStyle.module.css";

const RespCalc = ({ n1, n2, op }) => {

  let msg = "Resultado";
  let result;

  function operation(num1, num2, oper) {
    console.log(`Num1 = ${num1}  Num 2 = ${num2} Operation = ${oper} `);
    
    if(oper == "+"){
      result = Number(num1) + Number(num2);
    } 
    else if(oper == "-"){
      result = Number(num1) - Number(num2);
    } 
    else if(oper == "*"){
      result = Number(num1) * Number(num2);
    } 
    else if(oper == "/"){
      result = Number(num1) / Number(num2);
    } 

    if(num1 != undefined && num2 != undefined) {
      msg = "Resultado ";
      console.log(typeof(result));
      console.log(result);
      return result;
    }
    else {
      msg = "";
      return "Operação invalida ou números faltando!";
    }

  }

  return (
    <div className={styles.containerResp}>
        <span className={styles.spanInfo}>
            {msg} 
        </span>
        <span className={styles.spanResp}>
            {operation(n1, n2, op)} 
        </span>
    </div>
  );
};

export default RespCalc;
