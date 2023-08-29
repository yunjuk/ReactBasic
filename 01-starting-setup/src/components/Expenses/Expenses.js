import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  //일단 props를 가져와야 array를 쓸 수 있음. 왜냐면 프로그램에서 읽기에는 일단 선언이 먼저 되어야 함.
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

 const filteredExpenses = props.items.filter(expens => {
  return expens.date.getFullYear().toString() === filteredYear; 
 });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense = {filteredExpenses} />
        <ExpensesList item = {filteredExpenses} />


      </Card>
    </div>
  );
};

export default Expense;
