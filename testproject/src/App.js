import React from 'react';
import './styles.css';
import Todo from "./Todo";

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    return (
        <ul>
       
        {DUMMY_TODOS.map((todo) =>( <Todo text ={todo} />))}
        </ul>
    );
};