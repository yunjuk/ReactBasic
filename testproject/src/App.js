import React from 'react';
import "./styles.css"
import { useState } from 'react';


// don't change the Component name "App"
export default function App() {

    const [modal, setModal] = useState(false); 
    const modalHandler = (riseMessage) => {
       setModal(true);
    };
    const riseMessageHandler = () => {
        setModal(false);
    };
    let warning = null;
    if (modal) {
        warning = (
            <div id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={riseMessageHandler}>Proceed</button>
          </div> 
        );
    }

    return (
        <div> 
            {warning}   
        <button onClick={modalHandler}>Delete</button>
        
                    
      </div>
    );
   


}