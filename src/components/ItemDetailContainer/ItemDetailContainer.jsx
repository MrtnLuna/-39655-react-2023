import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import "../ItemDetailContainer/itemDetailContainer.css";
import { ItemDetail } from '../ItemDetail/ItemDetail';
import  {ItemList}  from "../ItemList/ItemList"; 
import { Greeting } from '../Greeting/Greeting';


export const ItemDetailContainer = () => {

     const [item, setItem] = useState([]);

    const {id} = useParams()
    useEffect(() => {
        fetch('../json/data.json')
        .then(response => response.json())
        .then (productos => {
            const prod = productos.find(prod => prod.id === parseInt(id))
            setItem(prod)            
        })
    }, [id])
    return(
        <div className="container ">
            <div className="greeting">
                <Greeting path={4}/>
            </div>
            <div className='showItem'>
                <ItemDetail item={item} />
            </div>
           
        </div>
    )
}