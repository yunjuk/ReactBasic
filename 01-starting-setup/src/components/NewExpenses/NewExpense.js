import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//ExpenseItem에서 새로운 비용을 입력받는 컴포넌트

const NewExpense = (props) => {
  const [isEditing, setIsediting] = useState(false);
//버튼 누르면 상태창 사라지는 거 구현, 처음에는 flase


  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };


//버튼 누르면사라지는 거
const startEditingHandler = () => {
  setIsediting(true);
};
const stopEditinHandler = () => {
  setIsediting(false);
};

  console.log("NewExpenseForm : "+props);

  return (
    <div className="new-expense">
      {!isEditing &&
       <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditing && 
      <ExpenseForm onSaveExpenseData={onSaveExpenseData}
       onCancel= {stopEditinHandler} /> }
    </div>
  ); //버튼 누르면 입력창 사라지기 구현. 
};
export default NewExpense;
