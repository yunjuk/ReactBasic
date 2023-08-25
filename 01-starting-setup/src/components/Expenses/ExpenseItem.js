
import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
//card를 사용하고있음 그전에는 컴포넌트에 같이있었지만 지금은 ui에 있으니까
//디렉토리가 한단계올라감

const ExpenseItem = (props) => {
 
  // 만약 js에서 document.getElementById('root').addEventListener();
  //이런 식으로 코드를 달게 되면, 작동확률이 반반이라서 리액트가 제공하는 걸로 해야함 
  //여기에 on으로 시작하는 것을 달아야 함. 
  //그래서 아래 버튼 태그에 on 을 닮 리액트에서 제공하는 기능임 

  // const expenseDate = new Date(2021, 2, 28).toString();
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  const clickHanler = () => {
    console.log("clicked");
  }  //function clickHandler() {} 이렇게 구현해도 됨. 

  return (
    <Card className="expense-item">
        {/* <div className="">{props.date.toLocaleDateString()}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
    <button onClick = {clickHanler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
