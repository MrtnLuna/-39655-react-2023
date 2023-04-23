import "./item.css";
import {ItemCount} from "../ItemCount/ItemCount"; 
import { Link } from "react-router-dom";
export const Item = ({item}) =>{
   
    const onAdd = (contador) => {
       // console.log(contador)
       // console.log(item)
    }
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <img src={item.img} className="card-img-top" alt={`Imagen producto ${item.nombre}`} />
            <div className="card-body">
                <div className="card-title ">Modelo: {item.modelo}</div>
                <div className="card-text">Marca: {item.marca}</div>
                <div className="card-text">Precio: {item.precio}</div>
                <div className="card-text">Stock: {item.stock}</div>
                <button><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
                
            </div>
        </div>
    )
}
