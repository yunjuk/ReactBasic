import React from 'react';
import ExpenseItem from './components/ExpenseItem';

// don't change the Component name "App"
export default function App() {
    const expenses =[
        {id: 'el',
        amount: 27.67,
        date: new Date(2020, 12, 28)
        },
        {id: 'el2',
        amount: 45.5,
        date: new Date(2021, 8, 15)
        },
        {id: 'el3',
        amount: 77.5,
        date: new Date(2022, 7, 5)
        },
        {id: 'el4',
        amount: 88.5,
        date: new Date(2023, 5, 7)
        }
    ];
    return (
        <div>
           
            <h2>Let's get started!</h2>
            <ExpenseItem 
            title={expenses[0].title} 
            amount={expenses[0].amount}
            date={expenses[0].date}
            />
            <ExpenseItem 
            title={expenses[1].title} 
            amount={expenses[1].amount}
            date={expenses[1].date}
            />
            <ExpenseItem 
            title={expenses[2].title} 
            amount={expenses[2].amount}
            date={expenses[2].date}
            />
            <ExpenseItem 
            title={expenses[3].title} 
            amount={expenses[3].amount}
            date={expenses[3].date}
            />
            

        </div>
    );
};

