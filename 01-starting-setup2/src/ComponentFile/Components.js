import React, { useImperativeHandle } from "react";
import "../index.css";

const Components = (concepts) => {
  return (
   
      <li className="concept">
        <img src={concepts.image} alt={concepts.title} />
        <h2>{concepts.title}</h2>
        <p>{concepts.description}</p>
      </li>
 
  );
};


export default Components;