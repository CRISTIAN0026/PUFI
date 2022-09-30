import React from "react";
import { IoUmbrellaOutline, IoGameControllerOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { GiSunglasses } from "react-icons/gi";
import "./Encabezado.css";

export default function Encabezado(){


    return(
        <div className="encabezado">
            <div>
                <h1>Pufi</h1>
            </div>
        <div className="encabezado1">
            <div className="icons">
        <IoGameControllerOutline fontSize="35px"/>
        <h5>PUFI CONTROLLER </h5>
        </div>
        <div className="icons">
        <IoUmbrellaOutline fontSize="35px"/>
        <h5>PUFI UMBRELLA</h5>
        </div>
        <div className="icons">
        <FiShoppingBag fontSize="35px"/>
        <h5>PUFi BAG</h5>
        </div>
        <div className="icons">
        <GiSunglasses fontSize="35px"/>
        <h5>PUFI GLASSES</h5>
        </div>
        </div>
        <div className="inicio">
            <p className="th">MI CUENTA</p>
            <p>Mi COMPRA </p>
        </div>
        </div>
    )
}