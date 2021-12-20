import React, { useState } from "react";
import axios from "axios"; 
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword); //create state b/c the value of search entry will change in component
    let [results, setResults] = useState(null); //3a. create state to track the changes of API results with each word entered - will update pg 
    let [loaded, setLoaded] = useState(false); // tracks whether or not the page was loaded 
    
    function handleResponse(response){ //Define handleResponse function
        console.log(response.data[0]);
        setResults(response.data[0]);//3b. - every time you get response from dictionary API, update the results and store it 
    }
    
    function search(){ //makes the API call using the url to get the results to a word searched 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; //After creating API url, interpolate and add ${keyword} state so any word can be defined
        axios.get(apiUrl).then(handleResponse); //Use axios.get to make request
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search(); //calls the function search which makes APi call
    }

    function handleKeywordChange(event){  
        setKeyword(event.target.value) 
    }
    
    function load(){
        setLoaded(true); //will render the component below b/c the default state is changed from false to true
        search(); //calls search function which will make API call with results
    }

    if (loaded){ //want dictionary to load a word on default - if loaded, then show the entire form. If not, call the load function which changes setLoaded to true and calls search function
      return ( //2. Insert component Results - 4. Send property value of {result} as  property, named results to component Results. It will re-render every time the results (setResults) updates 
        <div className="Dictionary">
            <section>
                <h1>Type in a word to look up</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search" 
                    autoFocus={true} 
                    onChange={handleKeywordChange} 
                    defaultValue={props.defaultKeyword} />
                </form>
                <div className="hint">
                    suggested words: plant, sunset, love, tautology...
                </div>
            </section>
            <Results results={results} />
        </div>
    );   
    } else {
        load();
        return "Loading";
    }

    
}