import {useState, useEffect} from 'react';

import "./itemListContainer.css"
import  {ItemList}  from "../ItemList/ItemList"; 
import { useParams } from 'react-router-dom';
import { Greeting } from '../Greeting/Greeting';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { category } = useParams();
    
    useEffect( () => {
        console.log('pasa?')
        if(category){
            fetch('../json/data.json')
            .then( response => response.json())
            .then( productos => {
                console.log('productos')
                const productosFiltrados = productos.filter( item => { return item.stock > 0 && item.category == parseInt(category)});
                setProductos(productosFiltrados)
            } )
        } else{
            fetch('./json/data.json')
            .then( response => response.json())
            .then( productos => {
                const productosFiltrados = productos.filter( item => item.stock > 0 );
                setProductos(productosFiltrados)
            } )
        }
        
    }, [category])
   
    return (
        <div className="container itemListContainer">
            <div className="categoria">
                <Greeting path={category}/>
            </div>
            <ItemList productos ={productos}/>
        </div>

    )
}