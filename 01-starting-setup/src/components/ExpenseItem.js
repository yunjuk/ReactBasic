import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67;
    return ( 
        <div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className='expense-item__description'><h2>{props.title}</h2></div>
    <div className='expense-item__price'>${props.amount}</div>
    </div>
//큰 걸로 한번에 묶어줘야 에러가 안남. 
//자바스크립트 식을쓸라면 {}으로 묶어줘야 하고
//toString을 써야 날짜 쓸 수 있음
    )

};

export default ExpenseItem;