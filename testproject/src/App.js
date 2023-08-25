
import './styles.css';
import React,{useState} from 'react';
import Expenses from "./components/Expense";
import NewExpense  from './components/Expense/NewExpenses/NewExpense';
import Expense from './components/Expense';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
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
  ]

    return (
        <div>
            <Expense />
            <NewExpense />
        </div>
    );
}
