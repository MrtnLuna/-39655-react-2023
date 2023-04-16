import {useState, useEffect} from 'react';

import "./itemListContainer.css"
import  {ItemList}  from "../ItemList/ItemList"; 


export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);

    useEffect( () => {
       
         fetch('./json/data.json')
            .then( response => response.json())
            .then( productos => {
                
                const productosFiltrados = productos.filter( item => item.stock > 0);
                setProductos(productosFiltrados)
            } )
    }, [])

   

    return (
        <div className="container itemListContainer">
            <div className="categoria"><p>{greeting}</p></div>
            <ItemList productos ={productos}/>
        </div>

    )
}