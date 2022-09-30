import React from "react";
import { MdSecurity } from "react-icons/md";
import { ImQrcode } from "react-icons/im";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";




export default function PieDePagina(){

    return(
        <div>
            <h1>Pufi</h1>
            <div>
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            <p>PUFI RAIN</p>
            </div>
            <div>
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>COMO COMPRAR</p>
                <p>TERMINOS & CONDICIONES</p>
            </div>
            <div>
                <p>COMPRA 100% SEGURA</p>
                <p><ImQrcode/> <MdSecurity/> COMPRA CON LA GARANTIA DE PUFI</p>
            </div>
            <div>SIGUENOS EN <TiSocialFacebook/> <TiSocialTwitter/> <TiSocialInstagram/></div>
            <div>
                <p>Pufi Copyrigth 2017 - Todos los derechos reservados</p>
                <p>BRANDLIVE</p>
            </div>
        </div>
    )
}