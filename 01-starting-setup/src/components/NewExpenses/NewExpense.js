import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//ExpenseItem에서 새로운 비용을 입력받는 컴포넌트

const NewExpense = (props) => {
  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  console.log("NewExpenseForm : "+props);

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
    </div>
  );
};
export default NewExpense;
