import React from "react";
import "./Photos.css";

export default function Photos(props){//8. Create photos component and sent phots as properties 
    if (props.photos) { //10. To fix undefined errors, need conditional rendering - IF there are pic results in props.photos, then run a loop through the photos and display them in 3 columns, with each photo clickable to go to the original URL link ELSE return nothing if no results in props.photos  
        console.log(props.photos); //9. pathway since we are in photos.js is props.propsName - shows results as array
        return (
            <section className="Photos">
                <div className="row">
                {props.photos.map(function (photo, index) { //11. Loop through the array of photos and display them 1 by 1 - display in bootstrap grid and make clickable to original link 
                    return (
                        <div className="col-4" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                                <img src={photo.src.landscape}  alt={props.keyword} className="img-fluid" /> 
                            </a>
                        </div>
                    );
                })}
                </div>
            </section>
        );  
    } else {
        return null;
    }  
}