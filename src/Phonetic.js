import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {//2. Receives props from Results.js - 3. Create link to API path for audio {props.phonetic.audio} & then add the text path {props.phonetic.text} below
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="blank" rel="noreferrer">Listen</a>
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}