import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); //7. create state b/c the value of search entry will change in component
    
    function search(event){//6. this function called when we submit the form
        event.preventDefault();
        alert(`searching for definition of ${keyword}`); //interpolate the state - so that the word changes with each new entry
    }

    function handleKeywordChange(event){//9. this function called when we enter something in search bar  
        setKeyword(event.target.value) //10. will display the input entered into searchbar 
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeywordChange} />
            </form>
        </div>
    ); 
}