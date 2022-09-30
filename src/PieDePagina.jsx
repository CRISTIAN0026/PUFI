import React from "react";
import { MdSecurity } from "react-icons/md";
import { ImQrcode } from "react-icons/im";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import "./PieDePagina.css";



export default function PieDePagina(){

    return(
        <div>
        <div className="paginated">
            <h1>Pufi</h1>
            <div className="text">
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            </div>
            <div className="text">
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>COMO COMPRAR</p>
                <p>TERMINOS & CONDICIONES</p>
            </div>
            <div className="text">
                <p>COMPRA 100% SEGURA</p>
                <p><ImQrcode/> <MdSecurity/> COMPRA CON LA GARANTIA DE PUFI</p>
            </div>
            <div className="text">SIGUENOS EN <TiSocialFacebook/> <TiSocialTwitter/> <TiSocialInstagram/></div>
        </div>
        <div className="ultimo">
            <p className="text">Pufi Copyrigth 2017 - Todos los derechos reservados</p>
            <p >BRANDLIVE</p>
            </div>
        </div>
    )
}