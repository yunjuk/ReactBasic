import React from "react";
import ExpenseItem from "./ExpenseItem";
import  "./Expenses.css"
import Card from "../../UI/Card";



const Expense = (props) => {
   //일단 props를 가져와야 array를 쓸 수 있음. 왜냐면 프로그램에서 읽기에는 일단 선언이 먼저 되어야 함. 
   console.log(props.array[0].id)
return (
    <Card className="expenses">
       <ExpenseItem  id={props.array[0].id} //그 다음에 이렇게 props.array로 가져와서 원하는 부분을 호출해서 씀. 
            title={props.array[0].title}
            amount={props.array[0].amount}
            date={props.array[0].date}
          />
          <ExpenseItem 
            id={props.array[1].id}
            title={props.array[1].title}
            amount={props.array[1].amount}
            date={props.array[1].date}
          />
          <ExpenseItem 
            id={props.array[2].id}
            title={props.array[2].title}
            amount={props.array[2].amount}
            date={props.array[2].date}
          />
          <ExpenseItem 
            id={props.array[3].id}
            title={props.array[3].title}
            amount={props.array[3].amount}
            date={props.array[3].date}
          />
          </Card>
)
};

export default Expense;