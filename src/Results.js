import React from "react";
import "./Results.css";

export default function Results(props) { //4. Send results as props 
    if (props.results) { //5. Conditional rendering - if there are results, then display the results otherwise it's blank
       return (
        <div className="Results">
            Hello
        </div>  
    );    
    } else {
        return null;
    }
    
}