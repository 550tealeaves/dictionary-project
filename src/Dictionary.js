import React, { useState } from "react";
import axios from "axios"; //4. Import axios line 
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); //create state b/c the value of search entry will change in component
    
    function handleResponse(response){ //8. Define handleResponse function
        console.log(response.data); //9. Definitions/phonetics always stored within data
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
        </div>
    ); 
}