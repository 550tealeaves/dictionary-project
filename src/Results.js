import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) { //Send results as props 
    if (props.results) { //5. Conditional rendering - if there are results, then display the results otherwise it's blank
       return ( //6. display word typed as h2 from {props.results.word}
        <div className="Results">
            <h2>{props.results.word}</h2> 
            {props.results.meanings.map(function(meaning, index) { //8. Loop through each meaning that we get from the object "word". Then send meaning to the component, Meaning 
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>  
    );    
    } else {
        return null;
    }
    
}