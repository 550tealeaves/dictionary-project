import React, { useState } from "react";
import axios from "axios"; 
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword); //create state b/c the value of search entry will change in component
    let [results, setResults] = useState(null); // create state to track the changes of API results with each word entered - will update pg 
    let [loaded, setLoaded] = useState(false); // tracks whether or not the page was loaded 
    let [photos, setPhotos] = useState(null); //7. tracks the current photo whenever a word is searched for
    
    function handleDictionaryResponse(response){ //Define handleResponse function
        console.log(response.data[0]);
        setResults(response.data[0]);//Every time you get response from dictionary API, update the results and store it 
    }
    
    function search(){ //makes the API call using the url to get the results to a word searched 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`; //After creating API url, interpolate and add ${keyword} state so any word can be defined
        axios.get(apiUrl).then(handleDictionaryResponse); //Use axios.get to make request
    }

    function handlePexelsResponse(response){ //4. Function handle houses the setPhotos state - when called will display results in response.data.photos on the pg
        console.log(response);
        setPhotos(response.data.photos); //7a. this is where the photos stored in API results
    }
    
    let pexelsApiKey ="563492ad6f91700001000001f6c8ac98c12c4921a81f1c9995975b2b"; //3. API key for pexels
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`; //3. Interpolate keword variable - 15. change # of pics shown at the end to 9 (or anything up to 80)
    let headers = { Authorization: `Bearer ${pexelsApiKey}` }; //5. store authorization header in variable - header
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse); //lets you authenticate yourself so you get access to API results - replace authorization statement with variable "headers"

    
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
      return ( //Insert component Results - Send property value of {result} as  property, named results to component Results. It will re-render every time the results (setResults) updates 
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
            <Photos photos={photos} />
        </div>
    );   
    } else {
        load();
        return "Loading";
    }

    
}