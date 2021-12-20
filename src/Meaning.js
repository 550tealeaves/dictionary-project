import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {//Receives props from Results.js
    return ( //9. Display part of speech as h3 through {props.meaning.partOfSpeech}
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){ //12. loops through the multiple definitions (use definition as function name)
                return( //12. (definition) = function name from above) definition.definition - shows all definitions & definition.example shows all examples
                    <div key={index}>
                            <div className="definition">{definition.definition}</div>    
                            <div className="example">{definition.example}</div>
                            <Synonyms synonyms={definition.synonyms}/>
                    </div>
                );
            })}
        </div>
    );
}