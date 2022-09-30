import React, {useState}  from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/_109281889_gettyimages-1135306444.jpg';
import img2 from './img/f.elconfidencial.com_original_0b0_cb4_bb2_0b0cb4bb230324a1b51cd9d723a1b297.jpg';
import img3 from './img/XboxSeriesXController_HERO.jpg';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel  activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item > 
        <div >
            <div >               
                <img  
                                      
                    src={img1}
                    alt="First img - Slide one"
                />                       
        </div>
            
            <div >
                <h1 >Adopciones</h1>
                <p >¿Todavía seguís buscando a tu compañero?<br/> ¡No lo busques más! Encontralo en nuestra red de refugios.</p>
                    <Link  to='/adoptar'><button>QUIERO ADOPTAR</button></Link>
            </div>
       
        </div>
        </Carousel.Item>

        <Carousel.Item >
        <div >
            <div >
                <img src={img2} alt='foundation'></img>
            </div>
            <div >
                <h1 >Fundaciones</h1>
                <p >¿Te gustaría ser parte de nuestra familia? <br/>Contactate con nosotros y empezá ya <br></br>  el proceso de inscripción.</p>
                    <Link to='/contacto'><button>QUIERO SER PARTE</button></Link>
            </div>
        </div>
        </Carousel.Item>

        <Carousel.Item >
        <div >
            <div >
                <h1 >Donaciones</h1>
                <p >Tu aporte de hoy puede ser <br></br>mi comida de mañana.</p>
                <Link  to='/donar'><button>QUIERO DONAR</button></Link>
            </div>
            <div>
                <img   
                             
                src={img3}
                alt="Foundations"
                />
            </div>
        </div>
        </Carousel.Item>   
        </Carousel>
        );

    }