import React from "react";

export default function Product(props) {

  


  return (
    <div>
    <article className="product">
      <h1>{props.title}</h1>
      <p className="price">${props.price}</p>
      <p>{props.explain}</p>
    </article>
    

    
    </div>
  );
}

