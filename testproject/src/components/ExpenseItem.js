import "./ExpenseItem.css";
import ExpenseDate  from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem=(props) => {
 const[title, setTitle] = useState(props.title);

 const clickHandler = () => {
   setTitle();
   console.log("button clicked");
 };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}/>
      </div>
      <div className="exspenxe-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
 
  );
};

export default ExpenseItem;
