import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) { //Send results as props 
    if (props.results) { //Conditional rendering - if there are results, then display the results otherwise it's blank
       return ( //Display word typed as h2 from {props.results.word}
        <div className="Results">
            <h2>{props.results.word}</h2> 
            {props.results.phonetics.map(function(phonetic, index) { //1. Loop through each phonetic and then create Phonetic component and send the props.phonetic
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                );
            })}
            {props.results.meanings.map(function(meaning, index) { //Loop through each meaning that we get from the object "word". Then send meaning to the component, Meaning 
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