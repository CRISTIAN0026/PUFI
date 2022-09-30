import React from "react";
import "./Ventas.css";

export default function Ventas({title, image, description, id}){

    return(
        <div className="ventas">
            <div>
            <h2>{title}</h2>
            <img src={image} alt="" className="images"/>
            </div>
            <div className="description">
                <p>{description}</p>
                <button>Ver mas</button>
            </div>
        </div>
        
    )
    
}