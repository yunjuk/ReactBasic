import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

//ExpenseItem에서 새로운 비용을 입력받는 컴포넌트

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )

};
export default NewExpense;