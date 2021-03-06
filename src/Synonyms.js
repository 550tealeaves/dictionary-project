import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {//2. Gets props from Meaning.js 3. C/R - if there are synonyms, then display them, else return null
    if (props.synonyms) { //4. Use map to loop through each synonym and display as list
        return (
            <ul className="Synonyms">
                {props.synonyms.map(function(synonym, index) {
                    return (
                        <li key={index}>
                            {synonym}
                        </li>
                    );
                })}
            </ul>
        );
    } else{
        return null;
    }   
}