import React from "react";
import "./styles.css";
import Card from "./components/Card";
// don't change the Component name "App"

 export default function App(props) {
  return (
    <div>
      <h1>Todos</h1>

      <Card className="card">
        <p>
          Please note: Below are just the most important todos - feel free to
          add more.
        </p>
      </Card>

      <ul>
        <li>
        <Card className="todo">
         
            <h2>Learn React</h2>
            <p>Learn React fundamentals & explore core concepts</p>
          </Card>
        </li>
        <li>
          <Card className="todo">
         
            <h2>Practice React</h2>
            <p>Apply your knowledge & build demo projects</p>
          </Card>
        </li>
      </ul>
    </div>
  );
}
