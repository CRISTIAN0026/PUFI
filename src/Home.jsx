import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from './redux/actions';
import ControlledCarousel from './Carousel';
import Encabezado from './Encabezado';
import Ventas from './Ventas';
import PieDePagina from './PieDePagina';
import ContactForm from './ContactForm';
import Espufi from './Espufi';

export default function Home(){
    let productos = useSelector(state => state.productos)
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductos())
    },[dispatch])

console.log(productos)

    return(
        <div>
            <Encabezado/>
            <ControlledCarousel/>
            {
                productos && productos.map(p =>{
                    return(
                        <div>
                            <Ventas title={p.title} description={p.description} image={p.image} id={p.id}/>
                        </div>
                    )
                })
            }
            <Espufi/>
        <ContactForm/>
        <PieDePagina/>
        </div>
    )
}