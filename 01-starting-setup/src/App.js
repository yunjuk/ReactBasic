import React, {useState} from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import ExpensesChart from "./components/Expenses/ExpensesChart";
//js를 가져오는것 css는 뒤에 꼭 .css를 붙임


  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const App = () => {
    const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //이러면 항상 최신의 데이터를 가져옴
    })
  };  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesChart expenses = {expenses}/>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
