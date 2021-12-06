import React, { useState } from "react";
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); //create state b/c the value of search entry will change in component
    let [results, setResults] = useState(null);
    
    function handleResponse(response){ //Define handleResponse function
        console.log(response.data[0].meanings[0].definitions[0].definition); //pathway to 1st definition
        setResults(response.data[0]);
    }
    
    function search(event){
        event.preventDefault();
        

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; //10. After creating API url, interpolate and add ${keyword} state so any word can be defined
        axios.get(apiUrl).then(handleResponse); //7. Use axios.get to make request
    }

    function handleKeywordChange(event){  
        setKeyword(event.target.value) 
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    ); 
}