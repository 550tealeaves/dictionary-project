import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {//Receives props from Results.js
    return ( //9. Display part of speech as h3 through {props.meaning.partOfSpeech}
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){ //12. loops through the multiple definitions (use definition as function name)
                return( //12. (definition) = function name from above) definition.definition - shows all definitions & definition.example shows all examples
                    <div key={index}>
                        <p>
                            <strong>Definition:</strong> {definition.definition} 
                            <br />
                            <strong>Example:</strong>  
                            <em>
                                 {definition.example}
                            </em>
                            <br />
                            <strong>Synonyms:</strong>
                            <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}