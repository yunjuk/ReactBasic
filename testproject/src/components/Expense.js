import React from "react";
import ExpenseItem from "./ExpenseItem";
import  "./Expense.css"
import Card from "../UI/Card";



const Expense = ({array:array}) => {
return (
    <Card className="expenses">
       <ExpenseItem  id={array[0].id}
            title={array[0].title}
            amount={array[0].amount}
            date={array[0].date}
          />
          <ExpenseItem 
            id={array[1].id}
            title={array[1].title}
            amount={array[1].amount}
            date={array[1].date}
          />
          <ExpenseItem 
            id={array[2].id}
            title={array[2].title}
            amount={array[2].amount}
            date={array[2].date}
          />
          <ExpenseItem 
            id={array[3].id}
            title={array[3].title}
            amount={array[3].amount}
            date={array[3].date}
          />
          </Card>
)
};

export default Expense;