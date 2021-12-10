import React, { useState } from "react";
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); //create state b/c the value of search entry will change in component
    let [results, setResults] = useState(null); //3. create state to track the changes of API results with each word entered - will update pg 
    
    function handleResponse(response){ //Define handleResponse function
        console.log(response.data[0].meanings[0].definitions[0].definition); //1. pathway to 1st definition
        setResults(response.data[0]);//3b. - every time you get response from dictionary API, update the results and store it 
    }
    
    function search(event){
        event.preventDefault();
        

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; //After creating API url, interpolate and add ${keyword} state so any word can be defined
        axios.get(apiUrl).then(handleResponse); //Use axios.get to make request
    }

    function handleKeywordChange(event){  
        setKeyword(event.target.value) 
    }
    
    return ( //2. Insert component Results - 4. Send propery value of {result} as  property, named results to component Results. It will re-render every time the results (setResults) updates 
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    ); 
}