import React from "react";
import "./styles.css";
import Card from "./components/Card";
// don't change the Component name "App"

 export default function App(props) {
  return (
    <Card>
      <h1>Todos</h1>

      <div className="card">
        <p>
          Please note: Below are just the most important todos - feel free to
          add more.
        </p>
      </div>

      <ul>
        <li className="todo">
          <div className="card">
            <h2>Learn React</h2>
            <p>Learn React fundamentals & explore core concepts</p>
          </div>
        </li>
        <li className="todo">
          <div className="card">
            <h2>Practice React</h2>
            <p>Apply your knowledge & build demo projects</p>
          </div>
        </li>
      </ul>
    </Card>
  );
}
