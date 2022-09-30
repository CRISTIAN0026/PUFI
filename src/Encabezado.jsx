import React from "react";
import { IoUmbrellaOutline, IoGameControllerOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GiSunglasses } from "react-icons/gi";
import "./App.css"

export default function Encabezado(){


    return(
        <div>
            <div>
                <h1>Pufi</h1>
            </div>
        <div>
        <h3>PUFI CONTROLLER <IoGameControllerOutline fontSize="35px"/></h3>
        <h3>PUFI UMBRELLA <IoUmbrellaOutline fontSize="35px"/></h3>
        <h3>PUFi BAG<FiShoppingBag fontSize="35px"/></h3>
        <h3>PUFI GLASSES<GiSunglasses fontSize="35px"/></h3>
        </div>
        <div>
            <p>MI CUENTA</p>
            <p>Mi COMPRA </p>
        </div>
        </div>
    )
}