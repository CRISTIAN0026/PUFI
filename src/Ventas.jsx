import React from "react";
import { Link } from "react-router-dom";

export default function Ventas({title, image, description, id}){

    return(
        <div>
            <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            </div>
            <div>
                <p>{description}</p>
                <Link to={'/' + id}>
                <button>Ver mas</button>
                </Link>
            </div>
        </div>
        
    )
    
}