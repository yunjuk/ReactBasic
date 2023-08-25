import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

//ExpenseItem에서 새로운 비용을 입력받는 컴포넌트

const ExpenseForm = () => {
  // const [enterdTitle, setEnteredTitle] = useState('')
  // const[enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    EnterdTitle: "",
    EnteredAmount: "",
    EnteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //   EnteredTitle: event.target.value,
    setUserInput((prevState) => {
        return {...prevState,enterdTitle: event.target.value}
    });
  };

  const AmountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
      EnteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
       setUserInput({
        ...userInput,
       EnteredDate: event.target.value
       });
    };
       
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-10-10"
            step="0.01"
            max="2022-12-31"
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
      <p>{userInput.enterdTitle}</p>
    </form>
  );
};
export default ExpenseForm;
