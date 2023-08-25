import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {


  const[cntInput, setCntInput] = React.useState(0);

  const cntHandler = (event) => {
   
    setCntInput((prevate) => {
      return prevate+1  //{}로 안묶어도 됨. 왜냐면 객체(여러개의 데이터를 하나로 묶음)가 없이 0뿐이라 상관 노
    });
    
    // setCntInput(event.target.);
    console.log("increment");
  }



    return (
      <div>
        <p id="counter">{cntInput}</p>
        <button onClick={cntHandler}>Increment</button>
      </div>
    );
}