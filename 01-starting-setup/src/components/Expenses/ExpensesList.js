import React from "react"
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"



    const ExpensesList =(props) =>{
        // let expensesContent = <p>No expense found</p>
    if (props.item.length === 0) {
        return <h2 className ="expenses-list-fallback"> found no expense </h2>
     } 
     return (
      <ul className="expenses-list">
        {props.item.map((expens) => (
           <ExpenseItem
             key={expens.id}
             title={expens.title}
             amount={expens.amount}
             date={expens.date}
           />
           ))}
           </ul>
     );
    };

  


export default ExpensesList;